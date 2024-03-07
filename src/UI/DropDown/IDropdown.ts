export interface DropdownProps {
  action: (elem: string) => void;
  options: string[];
  defaultAction: () => void;
}
