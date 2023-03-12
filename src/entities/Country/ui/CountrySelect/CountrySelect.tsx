import { classNames } from 'shared/lib/classNames/classNames';
import {
    FC, memo, useCallback, useMemo,
} from 'react';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}
export const CountrySelect: FC<CountrySelectProps> = memo((props: CountrySelectProps) => {
    const {
        className, onChange, value, readonly,
    } = props;
    const { t } = useTranslation();

    const selectOptions = useMemo(() => Object.entries(Country).map(
        (val) => ({
            value: val[0],
            content: val[1],
        }),
    ), []);

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Страна')}
            options={selectOptions}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
