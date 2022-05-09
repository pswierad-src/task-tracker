import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';
  
  constructor(private client:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.client.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.client.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;

    return this.client.put<Task>(url, task, httpOptions)
  }

  addTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}`;

    return this.client.post<Task>(url, task, httpOptions);
  }
}
