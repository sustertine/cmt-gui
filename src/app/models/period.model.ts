import {Group} from "./group.model";

export interface Period {
  name: string;
  startDate: Date;
  endDate: Date;
  groups: Array<Group>;
}
