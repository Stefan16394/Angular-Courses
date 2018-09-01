export const kinveyAppKey ='kid_r1bG4BgIm';
export const kinveyAppSecret = "879a84d9729a4b82a2c01835f38b6bba";
export const masterSecret = "42ffcd2b23804f3d9afa04bcc2a14be8"
export const userRoleId="v20f1bbc-q3nx-26j2-0123-439fako335dc"
export const adminRoleId="a80e8fec-b1f2-47c3-911d-5651331d35dc"

export default function makeAuth(type) {
    switch (type) {
        case "basic":
            return 'Basic ' + btoa(kinveyAppKey + ':' + kinveyAppSecret);
        case 'kinvey':
            return 'Kinvey ' + localStorage.getItem('authtoken');
        case "master":
            return 'Basic ' + btoa(kinveyAppKey + ':' + masterSecret)
            default:
            return null
    }
}