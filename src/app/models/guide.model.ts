import { Staff } from './staff.model';

export interface Guide extends Staff {
  id: number;
  licenseNumber?: string;
}
