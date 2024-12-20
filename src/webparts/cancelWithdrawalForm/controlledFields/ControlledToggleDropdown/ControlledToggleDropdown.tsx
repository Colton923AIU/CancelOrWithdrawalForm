import * as React from "react";
import { Controller } from "react-hook-form";
import { Dropdown, IDropdownOption } from "@fluentui/react";
import Intersection from "../../components/Intersection/Intersection";

interface ControlledToggleDropdownProps {
  name: string;
  control: any;
  label: string;
  errorMessage?: string;
}

const ControlledToggleDropdown: React.FC<ControlledToggleDropdownProps> = ({
  name,
  control,
  label,
  errorMessage,
}) => {
  const options: IDropdownOption[] = [
    { key: "yes", text: "Yes" },
    { key: "no", text: "No" },
  ];

  return (
    <Intersection>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Dropdown
            label={label}
            options={options}
            selectedKey={field.value}
            onChange={(e, option) => field.onChange(option?.key)}
            errorMessage={errorMessage}
          />
        )}
      />
    </Intersection>
  );
};

export default ControlledToggleDropdown;
