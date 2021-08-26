import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../../app.config';
import { Feature } from '../../shared/models/feature/feature.model';
import { SessionStorageService } from '../storage/storage-service';


@Injectable()
export class AuthenticationService {
    public token: string;
    public firstName: string;
    public lastName: string;
    public menu: Feature[] = [];

    constructor(
        private http: HttpClient,
        private config: AppConfig,
        private sessionStorageService: SessionStorageService) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string, isremote: boolean): Observable<boolean> {
        return this.http
            .post(
                this.config.apiUrl + (isremote === true ? '/user/remotelogin' : '/user/authenticate'),
                { username: username, password: password },
                { observe: 'response' }
            )
            .map(response => {
                const token = response.body && response.body['token'];
                const id = response.body && response.body['id'];
                const firstName = response.body && response.body['firstName'];
                const lastName = response.body && response.body['lastName'];
                const lastName2 = response.body && response.body['lastName2'];
                const email = response.body && response.body['email'];
                const tdocument = response.body && response.body['tipdoc'];
                const dni = response.body && response.body['numdoc'];
                const sclient = response.body && response.body['codCliente'];
                const menu = response.body && response.body['menu'];
                const profileId = response.body && response.body['profileId'];
                const permissionList = response.body && response.body['permissionList'];
                const flagCambioClave = response.body && +response.body['cambioClave'];

                if (token) {
                    this.token = token;
                    this.sessionStorageService.clearStorage();

                    localStorage.setItem(
                        'currentUser',
                        JSON.stringify({
                            id: id,
                            username: username,
                            token: token,
                            firstName: firstName,
                            lastName: lastName,
                            lastName2: lastName2,
                            email: email,
                            tdocument: tdocument,
                            dni: dni,
                            sclient: sclient,
                            menu: menu,
                            profileId: profileId,
                            flagCambioClave: flagCambioClave,
                            permissionList: permissionList
                        })
                    );
                    return true;
                } else {
                    return false;
                }
            });
    }

    public getToken(): string {
        let token = '';
        if ((JSON.parse(localStorage.getItem('currentUser')))) {
            token = JSON.parse(localStorage.getItem('currentUser'))['token'];
        }

        return token;
    }

    logout(): Observable<boolean> {
        const mHeaders = new HttpHeaders({
            Authorization: 'Bearer ' + this.token,
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.config.apiUrl + '/user/logout', {}, { headers: mHeaders })
            .map(() => {
                this.removeSession();
                return true;
            },
                () => {
                    this.removeSession();
                    return false;
                }
            );
    }

    removeSession() {
        this.token = null;
        this.firstName = null;
        this.lastName = null;
        this.menu = null;
        this.sessionStorageService.clearStorage();
    }

    getMenuProfile(NIDPROFILE: number, NIDPRODUCT: number): Observable<any> {
        return this.http
            .post(
                this.config.apiUrl + '/user/getmenuprofile',
                { NIDPROFILE: NIDPROFILE, NIDPRODUCT: NIDPRODUCT },
                { observe: 'response' }
            )
            .map(response => {
                return response.body;
            });
    }
}
