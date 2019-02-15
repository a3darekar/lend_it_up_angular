import { Component, OnInit } from '@angular/core';
import { Sessionmanager } from '../utils/sessionmanager';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './observables/user';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  key = localStorage.getItem('key');
  username;
  i;
  profileData = [];
  account;
  user = new User();
  selectedPicture: File = null;
  public branches = ['Computer', 'Mechanical', 'IT', 'E&TC', 'Electrical', 'Civil'];
  public years = ['FE', 'SE', 'TE', 'BE'];
  imageUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAMFBMVEXk5ueutLeqsLPn6eqxt7q8wcPh4+S3vL/EyMrIzM7e4OHR1NbU19nAxMe0urzO0dNQAVRXAAACv0lEQVR4nO2a7W7DIAxFA+Y7JLz/2440W5etDbEzO9EkjlR1+3VdY2ywGYZOp9PpdDqdTqfT+cfA4FLFLX/dIT4GOxujjPE2ZnexDS5bo7aYkK5TByizVi/YdJEXIJs38hV9jQkuvFVfF2KU10/+/c//dEIU158b8guTsL450K+xKBkH7lC+EgQNsBgDVJHyAcRW/G3IQgZkpL7yQgZ4pL7SIosABatfE5JIYUA7oBIFXDAS9JXm1weKA5Qe2V3gsFtgxXLrQ6EZwB+GE0mffw3ccRX6ycRsQCLqs2fDkRYCNQgcqz66Dn3DG4XQOAjuwFsSgbgJ+A3AHUW28B6Q7zfg9iW4PQjv3ob48+AXzIno/lTsjq5kvwncJxJqOc7MBgCxGgmci2kG8F+SablQC9zOMskD/PrEi4mEAQQXGAl9bHdAiVxLHqCzIfut5BP05USsaQoBZQF3EtyC2QlFTr7WpONAZK9CNAvkW6XD1GzVCm3ALVD276n+mqFB2luGyHwM2wWyfVkHrcJVA4sHKcxKb9R9uVR+WKZWqQTr59nbKeYEdwzOFjbf12oPKecxVkL9lJzTcJERACmX4I1eeIbA4x+/LIXoDBMGl+NBNZinUciIql6sUcflUBsbBWx4GZW28YU1J4GL70albT8w5qWEO4e82OB5LgcpUJuk31gGEwoi7hqEv831oT2oxWD+ND+it6be4E87IZGGJPucnann88H3mzMHRYhs8svTBroB5/b+Lp6aGZn1lxcm9+rTfMC6/k/wLxuoHTEkGn1pQ7zTOAc2HzDln1dwzcMTjXE0qHRAbktTQFSmE8MZCggHyC3AwnH7hKUC7zPfGgHquIMhuQVWjiYpYjngSTsXiCXBJ+03RtSHGmdojzLo80kyc7Msy2ahlVYQkIdzZ2jdltzaa5DlgoevnU6n0/lXfADueR5W3dDg3wAAAABJRU5ErkJggg==';
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private profileService: ProfileService) { }

  ngOnInit() {
    this.profileData.branch = 'Computer';
    this.profileData.academicYear = 'FE';
    this.account = localStorage.getItem('userPk');
    this.profileService.getProfile().subscribe(
      data => this.setProfile(data),
      error => console.log('error', error)
    );
  }

  onLogout(){
    var sessionManager = new Sessionmanager();
    sessionManager.destroySession(this.router, this.activatedRoute);
  }

  ngAfterContentChecked() {
    this.username = localStorage.getItem('username');
  }

  setProfile(data: User[]) {
    this.profileData = data;
    console.log('profile length', this.profileData.length);
    console.log('account', this.account);
    for ( this.i = 0; this.i < this.profileData.length; this.i++) {
      console.log('current profile', this.profileData[this.i].account);
      // tslint:disable-next-line:triple-equals
      if (this.account == this.profileData[this.i].account) {
        console.log('found', this.profileData[this.i]);
        this.user.setId(this.profileData[this.i].id);
        this.user.setFirstName(this.profileData[this.i].getFirstName());
        this.user.setLastName(this.profileData[this.i].getLastName());
        this.user.setContact(this.profileData[this.i].getContact());
        this.user.setCPRN(this.profileData[this.i].getCPRN());
        this.user.setEmail(this.profileData[this.i].getEmail());
        this.user.setBranch(this.profileData[this.i].getBranch());
        this.user.setAccount(this.profileData[this.i].account);
        this.user.setName(this.profileData[this.i].name);
        this.user.setProfilePicture(this.profileData[this.i].profilePicture);
        this.user.setAcademicYear(this.profileData[this.i].getAcademicYear());
        break;
      }
    }
  }

  processFile(event){
    this.selectedPicture = <File> event.target.files[0];

    var reader = new FileReader();
    reader.readAsDataURL(this.selectedPicture);
    reader.onload = (_event) => {
      this.imageUrl = reader.result;
    };
  }

  onUpload() {
    console.log('update profile', this.user);
    const formData = new FormData();
    formData.append('firstName', this.user.getFirstName());
    formData.append('authAccount', localStorage.getItem('userPk'));
    formData.append('lastName', this.user.getLastName());
    formData.append('profilePicture', this.selectedPicture, this.selectedPicture.name);
    formData.append('contactNo', this.user.getContact());
    formData.append('cprn', this.user.getCPRN());
    formData.append('email', this.user.getEmail());
    formData.append('branch', this.user.getBranch());
    formData.append('academicYear', this.user.getAcademicYear());
    this.profileService.updateProfile(formData).subscribe(
      data => console.log('profile update', data),
      error => console.log('profile update', error)
    );
  }
}
