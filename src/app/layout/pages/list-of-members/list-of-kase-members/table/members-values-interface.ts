export interface MembersValuesInterface {
  "orders": string,
  "page": 0,
  "records": ListOfKaseMembersRecordInterface[],
  "size": 0,
  "totalPages": 0,
  "totalRecords": 0
}

export interface ListOfKaseMembersRecordInterface {
  "name": string,
  "siteLink": string,
  currency: boolean,
  stock: boolean,
  derivatives: boolean
}
