export class User {
  public pk: number;
  public username: string;
  public password1: string;
  public password2: string;
  public email: string;
  public firstName: string;
  public lastName: string;
  public account: number;
  public contact: string;
  public name: string;
  public cprn: string;
  public branch: string;
  public academicYear: string;
  public profilePicture: string;

  public setId(id: number) {
    this.pk = id;
  }

  public setEmail(email: string){
    this.email = email;
  }

  public getEmail(){
    return this.email;
  }

  public setFirstName(firstName: string){
    this.firstName = firstName;
  }

  public getFirstName(){
    return this.firstName;
  }

  public setLastName(lastName: string){
    this.lastName = lastName;
  }

  public getLastName(){
    return this.lastName;
  }

  public setAcademicYear(academicYear: string){
    this.academicYear = academicYear;
  }

  public getAcademicYear(){
    return this.academicYear;
  }

  public setBranch(branch: string){
    this.branch = branch;
  }

  public getBranch(){
    return this.branch;
  }

  public setCPRN(cprn: string){
    this.cprn = cprn;
  }

  public getCPRN(){
    return this.cprn;
  }

  public setContact(contact: string){
    this.contact = contact;
  }

  public getContact(){
    return this.contact;
  }

  public setAccount(account: number) {
    this.account = account;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setProfilePicture(profilePicture: string) {
    this.profilePicture = profilePicture;
  }

  public getId() {
    return this.pk;
  }

  public getAccount() {
    return this.account;
  }

  public getName() {
    return this.name;
  }

  public getProfilePicture() {
    return this.profilePicture;
  }
}

export interface ProfileObservable {
  id: number;
  account: number;
  name: string;
  profilePicture: string;
}
