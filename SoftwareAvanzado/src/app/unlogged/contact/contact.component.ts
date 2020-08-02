import { Component, OnInit } from '@angular/core';
import { RestManagerService } from '../../app-service/rest-service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  url: string ="https://api.softwareavanzado.world/index.php"
  displayedColumns: string[] = ['id', 'name','actions'];
  dataSource:any;

  constructor(private restService: RestManagerService) { }

  ngOnInit(): void {
    const params = new Map<string, string>();
    // Contenido de pagina
    params.set('webserviceClient', 'administrator');
    params.set('webserviceVersion', '1.0.0');
    params.set('option', 'contact');
    params.set('api', 'hal');
    params.set('list[limit]','0')
    params.set('filter[search]','201404268')

   new Promise(resolve => {
      setTimeout(() => {
        this.restService.getWithParams(this.url, '','',params).subscribe(
          response => {
            console.log(response['_embedded']['item']);
            this.dataSource = response['_embedded']['item']
        }, error => {
            console.error(JSON.stringify(error));
        });
      }, 1000);
    });
  }

}
