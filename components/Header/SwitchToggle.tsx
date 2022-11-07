import { Switch, Group, useMantineColorScheme, useMantineTheme, ColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

interface SwitchToggleProps {
    toggleColorScheme: (value?: ColorScheme) => void
}

export function SwitchToggle() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const theme = useMantineTheme();

    return (

        <Switch
            checked={colorScheme === 'dark'}
            onChange={() => toggleColorScheme()}
            size="lg"
            onLabel={<IconSun color={theme.white} size={20} stroke={1.5} />}
            offLabel={<IconMoonStars color={theme.colors.gray[6]} size={20} stroke={1.5} />}
        />

    );
}