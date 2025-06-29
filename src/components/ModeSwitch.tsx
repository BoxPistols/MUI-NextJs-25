'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useColorScheme } from '@mui/material/styles';

export default function ModeSwitch() {
  const { mode, setMode } = useColorScheme();
  const [localMode, setLocalMode] = React.useState('system');
  
  React.useEffect(() => {
    setLocalMode(mode || 'system');
  }, [mode]);
  
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        mt: 1,
        p: 1,
      }}
    >
      <FormControl>
        <InputLabel id="mode-select-label">Theme</InputLabel>
        <Select
          labelId="mode-select-label"
          id="mode-select"
          value={localMode}
          onChange={(event) => {
            const newMode = event.target.value as typeof mode | undefined;
            if (newMode !== undefined) {
              setLocalMode(newMode);
              setMode(newMode);
            }
          }}
          label="Theme"
        >
          <MenuItem value="system">System</MenuItem>
          <MenuItem value="light">Light</MenuItem>
          <MenuItem value="dark">Dark</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
