import { gql } from '@apollo/client';

export const UPDATE_NOTE = gql`
  mutation UpdateNote($id: Int!, $title: String!, $content: String!) {
    updateNote(id: $id, title: $title, content: $content) {
      id
      title
      content
    }
  }
`;
