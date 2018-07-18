import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { ServicesComponent } from './services/services.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { AbouttasoftComponent } from './about/abouttasoft/abouttasoft.component';
import { AboutcommunityComponent } from './about/aboutcommunity/aboutcommunity.component';
import { TasoftnewsComponent } from './about/tasoftnews/tasoftnews.component';
import { TasofteventsComponent } from './about/tasoftevents/tasoftevents.component';
import { StandardsComponent } from './resources/standards/standards.component';
import { WhitepapersComponent } from './resources/whitepapers/whitepapers.component';
import { CasestudyComponent } from './resources/casestudy/casestudy.component';
import { TWknowledgeComponent } from './resources/twknowledge/twknowledge.component';
import { TablogsComponent } from './tablogs/tablogs.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ResourcesComponent,
    ServicesComponent,
    SolutionsComponent,
    AbouttasoftComponent,
    AboutcommunityComponent,
    TasoftnewsComponent,
    TasofteventsComponent,
    StandardsComponent,
    WhitepapersComponent,
    CasestudyComponent,
    TWknowledgeComponent,
    TablogsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    {path:'about',children:[
        {path:'abouttasoft',component:AbouttasoftComponent},
        {path:'aboutcommunity',component:AboutcommunityComponent},
        {path:'aboutnews',component:TasoftnewsComponent},
        {path:'aboutevents',component:TasofteventsComponent},
        {path:'',component:AboutComponent}
        ]},
    {path:'contact',component:ContactComponent},
    {path:'home',component:HomeComponent},
    {path:'services',children:
        [
            {path:'',component:ServicesComponent}
        ]
    },
    {path:'solutions',component:SolutionsComponent},
    {path:'tablogs',component:TablogsComponent},
    {path:'resources',children:
        [
            {path:'',component:ResourcesComponent},
            {path:'knowledge',component:TWknowledgeComponent},  
            {path:'whitepapers',component:WhitepapersComponent},  
            {path:'casestudy',component:CasestudyComponent}, 
            {path:'standards',component:StandardsComponent},  
        ]
    },
    {path:'**',redirectTo:'/home',pathMatch:'full'}
    ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
