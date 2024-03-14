import React, { useId, useState } from 'react';

import { DropdownProps } from '../IDropdown';
import { Box, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';

function Dropdown({ options, defaultAction, action }: DropdownProps) {
  const [value, setValue] = useState(options[0]);
  const id = useId();

  const onChange = (e: SelectChangeEvent<string>) => {
    defaultAction();
    action(e.target.value);
    setValue(e.target.value);
  };

  return (
    <Box sx={{ minWidth: '150px', textAlign: 'center' }}>
      <FormControl fullWidth>
        <Select
          fullWidth
          id={id}
          value={value}
          onChange={onChange}
          sx={{ background: 'white', border: ' 1px solid white', fontSize: '20px' }}
        >
          {options.map((e, i) => (
            <MenuItem
              key={i}
              value={e}
              sx={{
                fontSize: '1.25rem',
                padding: '5px 12px',
              }}
            >
              {e}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Dropdown;
