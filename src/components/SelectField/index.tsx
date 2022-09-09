import { useMemo } from 'react';
import { Select, SelectChangeEvent, FormControl, InputLabel, MenuItem } from '@mui/material';

interface SelectFieldProps {
  options: string[] | { label: string, value: string }[];
  value: string;
  id: string;
  label: string;
  onChange: (e: SelectChangeEvent) => void;
}

export function SelectField({
  options,
  value,
  onChange,
  id,
  label,
}: SelectFieldProps) {
  const labelId = useMemo(() => `${id}-label`, [id]);
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        value={value}
        onChange={onChange}
        label="Key"
      >
        {options.map(option => {
          const value = typeof option === 'string' ? option : option.value;
          const label = typeof option === 'string' ? option : option.label;
          return (
            <MenuItem key={value} value={value}>{label}</MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
