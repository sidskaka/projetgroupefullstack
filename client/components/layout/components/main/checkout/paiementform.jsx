import React from 'react'
import InfosCard from './infoscard'
import InfosClient from './infosclient'

const PaiementForm = () => {
    return(
        <section class="shop checkout section">
			<div class="container">
				<div class="row">
                    <InfosClient />
                    <InfosCard />
                </div>
            </div>
        </section>
    )
}

export default PaiementForm
