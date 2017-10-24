import { RankedTester } from '../../core/testers';
import { Control, ControlProps } from './Control';
/**
 * Default tester for enum controls.
 * @type {RankedTester}
 */
export declare const enumControlTester: RankedTester;
export declare class EnumControl extends Control<ControlProps, void> {
    render(): any;
}
declare const _default: any;
export default _default;