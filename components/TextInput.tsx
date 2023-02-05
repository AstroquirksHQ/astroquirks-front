import { KeyboardEventHandler } from "react";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
  TextareaHTMLAttributes,
  KeyboardEvent,
} from "react";

export type TextInputProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "onChange" | "value"
> & {
  onChange?: (value: string) => void;
  onEnter?: () => void;
  isError?: boolean;
  value: string;
  disabled?: boolean | undefined;
};

const TextInput = (props: TextInputProps) => {
  const { onChange, onEnter, className, isError, disabled, ...p } = props;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;
    onChange(e.target.value);
  };
  const handleKey: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.which === 13 && onEnter) onEnter();
  };
  return (
    <input
      type="text"
      disabled={disabled}
      className={`${className} text-input`}
      {...p}
      onChange={handleChange}
      onKeyPress={handleKey}
    />
  );
};

type NumberInputProps = Omit<TextInputProps, "value" | "onChange"> & {
  value: number;
  onChange: (v: number) => void;
};

export const NumberInput = (props: NumberInputProps) => {
  const { onChange, onEnter, className, isError, disabled, ...p } = props;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;
    onChange(Number(e.target.value));
  };
  const handleKey: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.which === 13 && onEnter) onEnter();
  };
  return (
    <input
      type="number"
      disabled={disabled}
      className={`${className} text-input`}
      {...p}
      onChange={handleChange}
      onKeyPress={handleKey}
    />
  );
};

type TextAreaProps = Omit<
  DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
  "onChange"
> & {
  isError?: boolean;
  onChange?: (value: string) => void;
  onEnter?: () => void;
};

export const Textarea = forwardRef((props: TextAreaProps, ref: React.Ref<HTMLTextAreaElement>) => {
  const { onChange, onEnter, className, isError, ...p } = props;
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!onChange) return;
    onChange(e.target.value);
  };
  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (onEnter) {
      if (e.which === 13) {
        e.preventDefault();
        e.stopPropagation();
        onEnter();
      }
    }
  };
  return (
    <textarea
      ref={ref}
      {...p}
      className={`${className} text-input`}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    />
  );
});

export default TextInput;
