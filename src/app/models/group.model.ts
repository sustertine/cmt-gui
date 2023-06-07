export interface Group {
  id: number;
  periodId: number;
  guide: string;
  staffIds: Array<string>;
  passengerIds: Array<string>;
}
