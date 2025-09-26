import React from 'react';
import { IconButton, TextField, InputAdornment, Avatar, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function Topbar({ lang, setLang, onMenuToggle }: { lang: string, setLang: (l: 'en' | 'ar') => void, onMenuToggle: () => void }) {
  return (
    <header className="topbar">
      <IconButton className="topbar-icon" aria-label="menu" onClick={onMenuToggle} aria-controls="sidenav" aria-expanded={undefined}><MenuIcon /></IconButton>
      <TextField
        className="topbar-search"
        placeholder="Search"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon className="search-icon" />
            </InputAdornment>
          ),
        }}
      />
      <div className="topbar-actions">
        <IconButton className="topbar-icon"><NotificationsNoneIcon /></IconButton>
        <IconButton className="topbar-icon"><ChatBubbleOutlineIcon /></IconButton>
        <IconButton className="topbar-icon"><SettingsOutlinedIcon /></IconButton>
        <Avatar className="topbar-avatar">B</Avatar>
        <Button size="small" variant="outlined" className="lang-btn" onClick={() => setLang('en')}>EN</Button>
        <Button size="small" variant="outlined" className="lang-btn" onClick={() => setLang('ar')}>AR</Button>
      </div>
    </header>
  );
}
