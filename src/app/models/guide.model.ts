import {Staff} from "./staff.model";

export interface Guide extends Staff {
  licenseNumber?: string;
}
