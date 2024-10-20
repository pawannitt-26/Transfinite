import { IconFileImport } from '@tabler/icons-react';
import { FC, useContext } from 'react';

import { useTranslation } from 'next-i18next';

import { SupportedExportFormats } from '@/types/export';

import { SidebarButton } from '../Sidebar/SidebarButton';
import HomeContext from '@/pages/api/home/home.context';

interface Props {
  onImport: (data: SupportedExportFormats) => void;
}

export const Import: FC<Props> = ({ onImport }) => {
  const { t } = useTranslation('sidebar');
  const {
    state: { conversations, showChatbar, defaultModelId, folders },
    dispatch: homeDispatch,
    handleCreateFolder,
    handleNewConversation,
    handleUpdateConversation,
  } = useContext(HomeContext);

  return (
    <>
      <input
      id="import-file"
      className="sr-only"
      tabIndex={-1}
      type="file"
      accept=".json"
      onChange={(e) => {
        if (!e.target.files?.length) return;

        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
        let json = JSON.parse(e.target?.result as string);
        onImport(json);
        };
        reader.readAsText(file);
      }}
      />

      <SidebarButton
      text={t('Import data')}
      icon={<IconFileImport size={18} />}
      onClick={() => {
        // Create a popup for URL input
        const urlInput = window.prompt('Please enter the GitHub URL:');
        const url = urlInput ? urlInput.trim() : '';

        if (!url) {
          alert('URL cannot be empty.');
          return;
        }
        if (url) {
          fetch(`http://localhost:8000/scrape_github_repo?github_url=${encodeURIComponent(url)}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((response) => response.json())
            .then((data) => onImport(data))
            .catch((error) => console.error('Error sending URL to backend:', error));
          
        }
      }}
      />
    </>
  );
};
