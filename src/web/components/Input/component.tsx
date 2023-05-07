import React from 'react';
import { SearchIcon, StyledInput, StyledInputContainer } from './views';

interface InputProps {
  id?: string;
  value?: string;
  className?: string;
  onChangeHandler?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  withSearchIcon?: boolean;
}

export function Input(props: InputProps) {
  const { value, placeholder, onChangeHandler, withSearchIcon = false, ...rest } = props;
  const [localControlledInputValue, setLocalControlledInputValue] = React.useState(value);
  React.useEffect(() => {
    setLocalControlledInputValue(value);
  }, [props.value]);

  const localOnChangeHandler =
    onChangeHandler ??
    function (event: React.ChangeEvent<HTMLInputElement>) {
      setLocalControlledInputValue(event.target.value);
    };

  return (
    <StyledInputContainer {...rest}>
      {withSearchIcon && (
        <div>
          <SearchIcon />
        </div>
      )}
      <StyledInput value={localControlledInputValue} onChange={localOnChangeHandler} placeholder={placeholder} />
    </StyledInputContainer>
  );
}
