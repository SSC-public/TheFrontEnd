import _ from 'lodash';
import React from 'react';
import { Segment, Header as H, Image } from 'semantic-ui-react';
import styled from 'styled-components';
import EllipsisText from 'react-ellipsis-text';

const RowSegment = styled(Segment)`
  padding: 0 !important;
  display: flex;
  justify-content: flex-end;
`;

const Header = styled(H)`
  font-size: 35px;
  font-family: IRANSans, 'Open Sans', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  margin-right: 2rem !important;
  margin-top: 2rem !important;
  width: 75% !important;
  text-align: right;
`;

const Text = styled.p`
  margin-bottom: 1rem;
  direction: rtl;
`;

function TasksDesktop({ tasks }) {
  return (
    <Segment.Group
      basic
      raised
      style={{
        width: '60vw',
        border: '0 !important',
        marginLeft: '20vw',
        display: 'flex',
        marginBottom: '3rem',
      }}
    >
      {_.map(tasks, (task) => {
        const { id, title_fa, description_fa, thumbnail } = task;
        return (
          <a href={`/dashboard/tasks/${id}/resource`}>
            <RowSegment>
              <Header>
                <Text>{title_fa}</Text>
                <Text style={{ fontSize: '1rem' }}>
                  <EllipsisText text={description_fa} length={200} />
                </Text>
              </Header>
              <Image size="small" src={`https://datadays.sharif.edu${thumbnail}`} />
            </RowSegment>
          </a>
        );
      })}
    </Segment.Group>
  );
}

export default TasksDesktop;