import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { RxChangeEvent } from 'rxdb';

import Background from './components/Background';
import Nav from './components/Nav';
import Dashboard from './routes/Dashboard';

import DBSchema from './db/schema';
import * as DBModel from './db/model';
import * as WorkActions from './features/work/actions';
import { createDB, createSchema, populateDB } from './db';

import workExperienceData from './assets/data/db/WorkExperience.model';
import companyData from './assets/data/db/Company.model';
import locationData from './assets/data/db/Location.model';
import positionData from './assets/data/db/Position.model';
import technologyData from './assets/data/db/Technology.model';
import contractTypeData from './assets/data/db/ContractType.model';
import projectData from './assets/data/db/Project.model';
import './App.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const dbP: Promise<DBModel.TPortfolioDatabase> = createDB();
    let dbRef: DBModel.TPortfolioDatabase;

    dbP.then(
      (db: DBModel.TPortfolioDatabase) => {
        dbRef = db;
        const schemaP: Promise<DBModel.TPortfolioCollection> = createSchema(db);

        schemaP.then((dbSchema: DBModel.TPortfolioCollection) => {
          (Object.keys(DBSchema) as DBModel.TPortfolioCollectionKey[]).forEach(schema => {
            const actions = {
              "work_experience": WorkActions.updateWorkExperience,
              "company": WorkActions.updateCompany,
              "location": WorkActions.updateLocation,
              "position": WorkActions.updatePosition,
              "technology": WorkActions.updateTechnology,
              "contract_type": WorkActions.updateContractType,
              "project": WorkActions.updateProject,
            }

            dbSchema[schema].$.subscribe((changeEvent: RxChangeEvent) => {
              const payload = changeEvent.rxDocument.toJSON();

              dispatch(actions[changeEvent.collectionName as DBModel.TPortfolioCollectionKey](payload));
            });
            populateDB(dbSchema, {
              workExperienceData,
              companyData,
              locationData,
              positionData,
              technologyData,
              contractTypeData,
              projectData,
            });
          });
        }, (err: any) => {
          console.dir(err);
        });
      },
      ({ code }) => {
        console.dir(code);
      }
    );

    return () => {
      dbRef.remove();

      return void(null);
    }
  }, []);

  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/">
          <Background>
            <Dashboard/>
          </Background>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
