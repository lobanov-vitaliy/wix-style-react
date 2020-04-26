import * as React from 'react';
import { Input } from 'wix-ui-core/input';
import { IconButton, Skins } from '../IconButton';
import style from './Counter.st.css';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { ReactComponent as Minus } from '../../assets/icons/minus.svg';
import { TPAComponentProps } from '../../types';
import { Tooltip } from '../Tooltip';
import { TooltipSkin } from '../Tooltip/TooltipEnums';
import { ReactComponent as ErrorIcon } from '../../assets/icons/Error.svg';
const isNumber = require('lodash/isNumber');

export interface CounterProps extends TPAComponentProps {
  onChange(val: string): void;
  incrementAriaLabel: string;
  decrementAriaLabel: string;
  inputAriaLabel: string;
  ['aria-abelledby']?: string;
  ['aria-label']?: string;
  value: number;
  step: number;
  min?: number;
  max?: number;
  error?: boolean;
  disabled?: boolean;
  errorMessage?: string;
}

interface DefaultProps {
  step: number;
  value: number;
}

/** Counter */
export class Counter extends React.Component<CounterProps> {
  static displayName = 'Counter';
  static defaultProps: DefaultProps = {
    step: 1,
    value: 0,
  };

  _onDecrement = () => {
    const { step, max, onChange, value } = this.props;
    if (max || max === 0) {
      const result = Math.min(max, value - step);
      onChange(result.toString());
      return;
    }
    onChange((value - step).toString());
  };

  _onIncrement = () => {
    const { step, min, onChange, value } = this.props;
    if (min || min === 0) {
      const result = Math.max(min, value + step);
      onChange(result.toString());
      return;
    }

    onChange((value + step).toString());
  };

  render() {
    const {
      incrementAriaLabel,
      decrementAriaLabel,
      inputAriaLabel,
      min,
      max,
      step,
      disabled,
      onChange,
      value,
      error,
      errorMessage,
      ...rest
    } = this.props;

    const shouldShowErrorMessageTooltip = error && errorMessage;
    return (
      <div
        {...style('root', { disabled, error }, rest)}
        dir="ltr"
        role="region"
        aria-labelledby={this.props['aria-labelledby']}
        aria-label={this.props['aria-label']}
      >
        <IconButton
          inverseColor
          icon={<Plus />}
          aria-label={incrementAriaLabel}
          className={style.btn}
          onClick={this._onIncrement}
          name="increment"
          skin={Skins.Full}
          disabled={disabled || (isNumber(max) && value + step > max)}
        />
        {shouldShowErrorMessageTooltip && (
          <Tooltip
            data-hook="dropdown-error-tooltip"
            content={errorMessage}
            placement="top"
            appendTo="window"
            skin={TooltipSkin.Error}
          >
            <ErrorIcon className={style.error} />
          </Tooltip>
        )}
        <div className={style.inputWrapper}>
          <Input
            aria-label={inputAriaLabel}
            onChange={ev => onChange(ev.target.value)}
            type="number"
            disabled={disabled}
            min={min}
            max={max}
            step={step}
            error={error}
            value={value.toString()}
          />
        </div>
        <IconButton
          inverseColor
          icon={<Minus />}
          skin={Skins.Full}
          aria-label={decrementAriaLabel}
          className={style.btn}
          onClick={this._onDecrement}
          name="decrement"
          disabled={disabled || (isNumber(min) && value - step < min)}
        />
      </div>
    );
  }
}