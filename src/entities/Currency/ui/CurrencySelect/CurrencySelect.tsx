import { classNames } from 'shared/lib/classNames/classNames';
import {
    FC, memo, useCallback, useMemo,
} from 'react';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Country } from 'entities/Country';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}
export const CurrencySelect: FC<CurrencySelectProps> = memo((props: CurrencySelectProps) => {
    const {
        className, onChange, value, readonly,
    } = props;
    const { t } = useTranslation();

    const selectOptions = useMemo(() => Object.entries(Currency).map(
        (val) => ({
            value: val[0],
            content: val[1],
        }),
    ), []);

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Валюта')}
            options={selectOptions}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
