import React from 'react';
import { FormattedMessage } from 'react-intl';
import Card from 'react-bootstrap/Card';

export default function Education() {
  return (
    <Card className="education">
      <Card.Link href="http://www.queensu.ca/" target="_blank" rel="noopener">
        <Card.Img
          variant="top"
          src="https://morning-garden-95959.herokuapp.com/images/queensu.png"
        />
      </Card.Link>
      <Card.Body>
        <Card.Title>
          <FormattedMessage
            id="education.queensu"
            defaultMessage="Queen's University"
          />
        </Card.Title>
        <Card.Text>
          <strong>
            <FormattedMessage
              id="education.degree"
              defaultMessage="Bachelor of Computing (Honours)"
            />
          </strong>
          <br />
          <FormattedMessage
            id="education.program"
            defaultMessage="Specialization in Software Design with Professional Internship"
          />
          <br />
          <FormattedMessage
            id="education.deans_list"
            defaultMessage="Dean’s Honour List 2017-18"
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
