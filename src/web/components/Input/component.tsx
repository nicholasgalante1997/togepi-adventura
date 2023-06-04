import React from 'react';
import { ListItem, SearchIcon, StyledInput, StyledInputContainer, UList } from './views';

type InputProps = {
  id?: string;
  value?: string;
  className?: string;
  onChangeHandler?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  withSearchIcon?: boolean;
  ref?: React.RefObject<HTMLInputElement>;
  type?: HTMLInputElement['type'];
  inErrorState?: boolean;
  errors?: string[];
};

export function Input(props: InputProps) {
  const { value, placeholder, onChangeHandler, withSearchIcon = false, id, className, inErrorState, errors, ...rest } = props;
  const [localControlledInputValue, setLocalControlledInputValue] = React.useState(value);
  React.useEffect(() => {
    setLocalControlledInputValue(value);
  }, [props.value]);

  const localOnChangeHandler =
    onChangeHandler ??
    function (event: React.ChangeEvent<HTMLInputElement>) {
      setLocalControlledInputValue(event.target.value);
    };
  
  function mapErrors(errors: string[]){
    return (
      <UList>
        {errors.map(e => <ListItem>{e}</ListItem>)}
      </UList>
    );
  }

  return (
    <React.Fragment>
      <StyledInputContainer id={id} className={className}>
        {withSearchIcon && (
          <div>
            <SearchIcon />
          </div>
        )}
        <StyledInput value={localControlledInputValue} onChange={localOnChangeHandler} placeholder={placeholder} {...rest} />
      </StyledInputContainer>
      {inErrorState && errors?.length && errors?.length > 0 && mapErrors(errors)}
    </React.Fragment>
  );
}
