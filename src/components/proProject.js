import React from "react"

const ProProject = () => (
    <div className="row proProject">
        <div className="three columns header-col">
            <h1>
                <span> Expérience <br/> <br/>professionnel</span>
            </h1>
        </div>
        <div className="nine columns main-col">
            <div className="row item">
                <div className="twelve columns stage">
                    <h3>Hello Marco</h3>
                    <p className="info">
                        Stage <span>&bull;</span>
                        <em className="date">juillet-octobre 2018</em>
                    </p>
                    <p>
                        Développement d'une plateforme admin afin de rentrer des données rapidement et 
                        efficacement dans la base de données qui seront repris par le bot sur messenger
                        et proposé aux utilisateurs.
                    </p>
                </div>
            </div>
            <div className="row item">
                <div className="twelve columns stage">
                    <h3>Ideel</h3>
                    <p className="info">
                        Stage <span>&bull;</span>
                        <em className="date">février-mai 2019</em>
                    </p>
                    <p>
                        Développement d'une plateforme qui permet de recenser les abonnements,
                        Mon rôle était avant tout d'ajouter des fonctionnalités et d'améliorer que ce soit 
                        la plateforme ou le code.
                    </p>
                </div>
            </div>
        </div>
    </div>

        
);

export default ProProject