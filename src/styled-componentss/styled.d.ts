
import {Theme} from '../themes/defaultTheme';
import 'styled-components';

declare module 'styled-components' {
    export interface defaultTheme extends Theme{
    }
}

