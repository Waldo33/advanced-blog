import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, FC, memo, useMemo,
} from 'react';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}
interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
    withoutEnding?: boolean;
}
export const Select = <T extends string>({
    className, label, options, value, onChange, readonly, withoutEnding,
}: SelectProps<T>) => {
    const optionList = useMemo(() => options?.map((opt) => (
        <option
            value={opt.value}
            className={cls.option}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value as T);
        }
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.SelectWrapper, mods, [className])}>
            {
                label && (
                    <span className={cls.label}>
                        {withoutEnding ? label : `${label}:~$`}
                    </span>
                )
            }
            <select
                className={cls.Select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionList}
            </select>
        </div>
    );
};
