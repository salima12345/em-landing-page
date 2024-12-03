import { Control, FieldValues, Path } from 'react-hook-form';

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  website?: string;
  message: string;
  agree: boolean;
  subject:string;
}

export interface CustomCheckboxProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  defaultValue?: boolean;
  className?: string;
  onChange?: (checked: boolean) => void;
}