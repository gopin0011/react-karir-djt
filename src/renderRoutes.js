import { Route } from "react-router-dom";

export function renderRoutes(userRoutes) {
    return (
      <>
        {userRoutes.map((route, index) => {
          if (route.childItems) {
            return (
              <>
                <Route
                  exact
                  path={route.path}
                  key={index}
                  render={(props) => (
                    <route.component {...props} routes={route.childItems} />
                  )}
                />
                {renderRoutes(route.childItems)}
              </>
            );
          } else {
            return (
              <Route
                exact
                path={route.path}
                key={index}
                render={(props) => <route.component {...props} />}
              />
            );
          }
        })}
      </>
    );
  }
