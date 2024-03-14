import React, { useId, useState } from 'react';

import { DropdownProps } from '../IDropdown';
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';

function Dropdown({ options, defaultAction, action }: DropdownProps) {
  const [value, setValue] = useState(options[0]);
  const id = useId();

  const onChange = (e: SelectChangeEvent<string>) => {
    defaultAction();
    action(e.target.value);
    setValue(e.target.value);
  };

  return (
    <FormControl sx={{ m: 1 }} fullWidth>
      <Select
        id={id}
        value={value}
        onChange={onChange}
        sx={{
          p: '0 30px ',
          background: 'white',
          border: '1px solid white',
          w: 'fit-content',
          fontSize: '1.25rem',
        }}
      >
        {options.map((e, i) => (
          <MenuItem key={i} value={e}>
            {e}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Dropdown;
