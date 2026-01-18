import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragonBallService } from '../services/dragon-ball';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters.html',
})
export class CharactersComponent implements OnInit {

  characters: any[] = [];
  private dragonBallService = inject(DragonBallService);

  ngOnInit(): void {
    this.dragonBallService.getCharacters().subscribe({
      next: (data) => {
        console.log('API Response:', data);
        this.characters = Array.isArray(data) ? data : (data.items || []);
      },
      error: (err) => {
        console.error('Error fetching characters:', err);
      }
    });
  }
}



