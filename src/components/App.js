import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

function App() {
    return (
        // Este crea toda las rutas con los componentes
        <BrowserRouter>
            <Layout>
                {/* Este Hace que cuando entremos a una ruta con su componente solo se renderee ese componente y no todos */}
                <Switch>
                    {/* El swith cuando encuentra badges y luego badges/new los asocia como iguales por que se parecen y toma el primero en este caso badges

                por lo cual para que realmente solo funciona con una ruta especifica tenemos que poner antes de path el exact para que sea estricto
                */}
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer} />
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
                    <Route exact path="/" component={Home} />
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;