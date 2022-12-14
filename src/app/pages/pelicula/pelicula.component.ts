import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetails } from 'src/app/interfaces/pelicula.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {Location} from '@angular/common'
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula?:MovieDetails;

  constructor(config: NgbRatingConfig, private activatedRoute: ActivatedRoute, private peliculasSvc:PeliculasService, private location:Location, private router: Router) { 
     // customize default values of ratings used by this component tree
     config.max = 10;
     config.readonly = true;
  }

  ngOnInit() {
    const {id} = this.activatedRoute.snapshot.params;
    
    combineLatest([
      this.peliculasSvc.getPeliculaDetalle(id),
    ]).subscribe(([movie])=>{

      if (!movie) {
        this.router.navigateByUrl('/');
          return;
        }

        this.pelicula=movie;
    })
  }

  regresar(){

this.location.back();

  }  

}
