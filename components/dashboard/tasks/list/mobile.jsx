import _ from 'lodash';
import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';
import EllipsisText from 'react-ellipsis-text';

function TasksMobile({ cid, mid, tasks }) {
  return (
    <Grid centered style={{ marginBottom: '5rem' }}>
      <Grid.Column mobile={14}>
        {_.map(tasks, (task, i) => {
          const { id, title_fa, description_fa, thumbnail } = task.content;
          return (
            <a key={i} href={`/dashboard/${cid}/${mid}/${id}`}>
              <Card style={{ padding: '1rem', width: '100%' }}>
                <Image src={`${thumbnail}`} />
                <Card.Content>
                  <Card.Header style={{ direction: 'rtl' }}>{title_fa}</Card.Header>
                </Card.Content>
                <Card.Description style={{ direction: 'rtl' }}>
                  <EllipsisText text={description_fa} length={200} />
                </Card.Description>
              </Card>
            </a>
          );
        })}
      </Grid.Column>
    </Grid>
  );
}

export default TasksMobile;
