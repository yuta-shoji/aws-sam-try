import Http, {NetworkHttp} from "../http/Http.ts";
import {apiGatewayHost} from "../../EnvExporter.ts";

export interface GreetingRepository {
    getGreeting(name: string): Promise<string>
}

export class DefaultGreetingRepository implements GreetingRepository {
    constructor(private http: Http = new NetworkHttp()) {
    }

    async getGreeting(name: string): Promise<string> {
        const url = apiGatewayHost + '/api/greeting'
        const params = {name}
        const data = await this.http.get<{data: string}>(url, undefined, params);
        return data.data
    }
}