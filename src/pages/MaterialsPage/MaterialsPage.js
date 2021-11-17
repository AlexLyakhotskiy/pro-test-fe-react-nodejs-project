import React from 'react';
import LiteratureList from '../../components/Materials/LiteratureList/LiteratureList/LiteratureList';
import ResourcesList from '../../components/Materials/ResoursesList/ResoursesList/ResoursesList';

import Container from '../../components/_shared/Container/Container';

export default function MaterialsPage() {
  return (
    <>
      <Container>
        <div>           
            <h2>Useful literature</h2>
            <div>
              <LiteratureList/>
            </div>

            <h2>Useful resources</h2>
            <div>
                <ResourcesList/>
            </div>
        </div>
      </Container>
    </>
  );
}
