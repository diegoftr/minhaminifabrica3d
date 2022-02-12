/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateEnderecosInput = {
  id?: string | null;
  numCEP: number;
  numero: number;
  complemento: string;
};

export type ModelEnderecosConditionInput = {
  numCEP?: ModelIntInput | null;
  numero?: ModelIntInput | null;
  complemento?: ModelStringInput | null;
  and?: Array<ModelEnderecosConditionInput | null> | null;
  or?: Array<ModelEnderecosConditionInput | null> | null;
  not?: ModelEnderecosConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Enderecos = {
  __typename: "Enderecos";
  id: string;
  numCEP: number;
  numero: number;
  complemento: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateEnderecosInput = {
  id: string;
  numCEP?: number | null;
  numero?: number | null;
  complemento?: string | null;
};

export type DeleteEnderecosInput = {
  id: string;
};

export type CreateChatsInput = {
  id?: string | null;
  usuarioEnvio: string;
  idProposta: string;
  msg: string;
  chatsPropostaId?: string | null;
};

export type ModelChatsConditionInput = {
  usuarioEnvio?: ModelStringInput | null;
  idProposta?: ModelStringInput | null;
  msg?: ModelStringInput | null;
  and?: Array<ModelChatsConditionInput | null> | null;
  or?: Array<ModelChatsConditionInput | null> | null;
  not?: ModelChatsConditionInput | null;
};

export type Chats = {
  __typename: "Chats";
  id: string;
  usuarioEnvio: string;
  Proposta?: Propostas | null;
  idProposta: string;
  msg: string;
  createdAt: string;
  updatedAt: string;
};

export type Propostas = {
  __typename: "Propostas";
  id: string;
  Orcamento?: Orcamentos | null;
  idOrcamento: string;
  prazo: string;
  valor: string;
  frete: string;
  responsavelProposta: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type Orcamentos = {
  __typename: "Orcamentos";
  id: string;
  arquivo: string;
  titulo: string;
  escala: number;
  Tecnologia: Tecnologias;
  Material: Materiais;
  Acabamento: Acabamentos;
  Cor: Cores;
  Proposta?: ModelPropostasConnection | null;
  situacao: SituacaoOrcamento;
  observacao?: string | null;
  usuario: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type Tecnologias = {
  __typename: "Tecnologias";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type Materiais = {
  __typename: "Materiais";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type Acabamentos = {
  __typename: "Acabamentos";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type Cores = {
  __typename: "Cores";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type ModelPropostasConnection = {
  __typename: "ModelPropostasConnection";
  items?: Array<Propostas | null> | null;
  nextToken?: string | null;
};

export enum SituacaoOrcamento {
  ATIVO = "ATIVO",
  ENCERADO = "ENCERADO"
}

export type UpdateChatsInput = {
  id: string;
  usuarioEnvio?: string | null;
  idProposta?: string | null;
  msg?: string | null;
  chatsPropostaId?: string | null;
};

export type DeleteChatsInput = {
  id: string;
};

export type CreateUsuariosInput = {
  id?: string | null;
  cpf: string;
  nome: string;
  email: string;
  usuariosEnderecoId?: string | null;
};

export type ModelUsuariosConditionInput = {
  cpf?: ModelStringInput | null;
  nome?: ModelStringInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelUsuariosConditionInput | null> | null;
  or?: Array<ModelUsuariosConditionInput | null> | null;
  not?: ModelUsuariosConditionInput | null;
};

export type Usuarios = {
  __typename: "Usuarios";
  id: string;
  cpf: string;
  nome: string;
  email: string;
  endereco?: Enderecos | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateUsuariosInput = {
  id: string;
  cpf?: string | null;
  nome?: string | null;
  email?: string | null;
  usuariosEnderecoId?: string | null;
};

export type DeleteUsuariosInput = {
  id: string;
};

export type CreateOrcamentosInput = {
  id?: string | null;
  arquivo: string;
  titulo: string;
  escala: number;
  situacao: SituacaoOrcamento;
  observacao?: string | null;
  usuario: string;
  orcamentosTecnologiaId: string;
  orcamentosMaterialId: string;
  orcamentosAcabamentoId: string;
  orcamentosCorId: string;
};

export type ModelOrcamentosConditionInput = {
  arquivo?: ModelStringInput | null;
  titulo?: ModelStringInput | null;
  escala?: ModelIntInput | null;
  situacao?: ModelSituacaoOrcamentoInput | null;
  observacao?: ModelStringInput | null;
  usuario?: ModelStringInput | null;
  and?: Array<ModelOrcamentosConditionInput | null> | null;
  or?: Array<ModelOrcamentosConditionInput | null> | null;
  not?: ModelOrcamentosConditionInput | null;
};

export type ModelSituacaoOrcamentoInput = {
  eq?: SituacaoOrcamento | null;
  ne?: SituacaoOrcamento | null;
};

export type UpdateOrcamentosInput = {
  id: string;
  arquivo?: string | null;
  titulo?: string | null;
  escala?: number | null;
  situacao?: SituacaoOrcamento | null;
  observacao?: string | null;
  usuario?: string | null;
  orcamentosTecnologiaId?: string | null;
  orcamentosMaterialId?: string | null;
  orcamentosAcabamentoId?: string | null;
  orcamentosCorId?: string | null;
};

export type DeleteOrcamentosInput = {
  id: string;
};

export type CreatePropostasInput = {
  id?: string | null;
  idOrcamento: string;
  prazo: string;
  valor: string;
  frete: string;
  responsavelProposta: string;
  orcamentosPropostaId?: string | null;
  propostasOrcamentoId?: string | null;
};

export type ModelPropostasConditionInput = {
  idOrcamento?: ModelStringInput | null;
  prazo?: ModelStringInput | null;
  valor?: ModelStringInput | null;
  frete?: ModelStringInput | null;
  responsavelProposta?: ModelStringInput | null;
  and?: Array<ModelPropostasConditionInput | null> | null;
  or?: Array<ModelPropostasConditionInput | null> | null;
  not?: ModelPropostasConditionInput | null;
};

export type UpdatePropostasInput = {
  id: string;
  idOrcamento?: string | null;
  prazo?: string | null;
  valor?: string | null;
  frete?: string | null;
  responsavelProposta?: string | null;
  orcamentosPropostaId?: string | null;
  propostasOrcamentoId?: string | null;
};

export type DeletePropostasInput = {
  id: string;
};

export type CreateCoresInput = {
  id?: string | null;
  descricao: string;
};

export type ModelCoresConditionInput = {
  descricao?: ModelStringInput | null;
  and?: Array<ModelCoresConditionInput | null> | null;
  or?: Array<ModelCoresConditionInput | null> | null;
  not?: ModelCoresConditionInput | null;
};

export type UpdateCoresInput = {
  id: string;
  descricao?: string | null;
};

export type DeleteCoresInput = {
  id: string;
};

export type CreateAcabamentosInput = {
  id?: string | null;
  descricao: string;
};

export type ModelAcabamentosConditionInput = {
  descricao?: ModelStringInput | null;
  and?: Array<ModelAcabamentosConditionInput | null> | null;
  or?: Array<ModelAcabamentosConditionInput | null> | null;
  not?: ModelAcabamentosConditionInput | null;
};

export type UpdateAcabamentosInput = {
  id: string;
  descricao?: string | null;
};

export type DeleteAcabamentosInput = {
  id: string;
};

export type CreateMateriaisInput = {
  id?: string | null;
  descricao: string;
};

export type ModelMateriaisConditionInput = {
  descricao?: ModelStringInput | null;
  and?: Array<ModelMateriaisConditionInput | null> | null;
  or?: Array<ModelMateriaisConditionInput | null> | null;
  not?: ModelMateriaisConditionInput | null;
};

export type UpdateMateriaisInput = {
  id: string;
  descricao?: string | null;
};

export type DeleteMateriaisInput = {
  id: string;
};

export type CreateTecnologiasInput = {
  id?: string | null;
  descricao: string;
};

export type ModelTecnologiasConditionInput = {
  descricao?: ModelStringInput | null;
  and?: Array<ModelTecnologiasConditionInput | null> | null;
  or?: Array<ModelTecnologiasConditionInput | null> | null;
  not?: ModelTecnologiasConditionInput | null;
};

export type UpdateTecnologiasInput = {
  id: string;
  descricao?: string | null;
};

export type DeleteTecnologiasInput = {
  id: string;
};

export type ModelEnderecosFilterInput = {
  id?: ModelIDInput | null;
  numCEP?: ModelIntInput | null;
  numero?: ModelIntInput | null;
  complemento?: ModelStringInput | null;
  and?: Array<ModelEnderecosFilterInput | null> | null;
  or?: Array<ModelEnderecosFilterInput | null> | null;
  not?: ModelEnderecosFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelEnderecosConnection = {
  __typename: "ModelEnderecosConnection";
  items?: Array<Enderecos | null> | null;
  nextToken?: string | null;
};

export type ModelChatsFilterInput = {
  id?: ModelIDInput | null;
  usuarioEnvio?: ModelStringInput | null;
  idProposta?: ModelStringInput | null;
  msg?: ModelStringInput | null;
  and?: Array<ModelChatsFilterInput | null> | null;
  or?: Array<ModelChatsFilterInput | null> | null;
  not?: ModelChatsFilterInput | null;
};

export type ModelChatsConnection = {
  __typename: "ModelChatsConnection";
  items?: Array<Chats | null> | null;
  nextToken?: string | null;
};

export type ModelUsuariosFilterInput = {
  id?: ModelIDInput | null;
  cpf?: ModelStringInput | null;
  nome?: ModelStringInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelUsuariosFilterInput | null> | null;
  or?: Array<ModelUsuariosFilterInput | null> | null;
  not?: ModelUsuariosFilterInput | null;
};

export type ModelUsuariosConnection = {
  __typename: "ModelUsuariosConnection";
  items?: Array<Usuarios | null> | null;
  nextToken?: string | null;
};

export type ModelOrcamentosFilterInput = {
  id?: ModelIDInput | null;
  arquivo?: ModelStringInput | null;
  titulo?: ModelStringInput | null;
  escala?: ModelIntInput | null;
  situacao?: ModelSituacaoOrcamentoInput | null;
  observacao?: ModelStringInput | null;
  usuario?: ModelStringInput | null;
  and?: Array<ModelOrcamentosFilterInput | null> | null;
  or?: Array<ModelOrcamentosFilterInput | null> | null;
  not?: ModelOrcamentosFilterInput | null;
};

export type ModelOrcamentosConnection = {
  __typename: "ModelOrcamentosConnection";
  items?: Array<Orcamentos | null> | null;
  nextToken?: string | null;
};

export type ModelPropostasFilterInput = {
  id?: ModelIDInput | null;
  idOrcamento?: ModelStringInput | null;
  prazo?: ModelStringInput | null;
  valor?: ModelStringInput | null;
  frete?: ModelStringInput | null;
  responsavelProposta?: ModelStringInput | null;
  and?: Array<ModelPropostasFilterInput | null> | null;
  or?: Array<ModelPropostasFilterInput | null> | null;
  not?: ModelPropostasFilterInput | null;
};

export type ModelCoresFilterInput = {
  id?: ModelIDInput | null;
  descricao?: ModelStringInput | null;
  and?: Array<ModelCoresFilterInput | null> | null;
  or?: Array<ModelCoresFilterInput | null> | null;
  not?: ModelCoresFilterInput | null;
};

export type ModelCoresConnection = {
  __typename: "ModelCoresConnection";
  items?: Array<Cores | null> | null;
  nextToken?: string | null;
};

export type ModelAcabamentosFilterInput = {
  id?: ModelIDInput | null;
  descricao?: ModelStringInput | null;
  and?: Array<ModelAcabamentosFilterInput | null> | null;
  or?: Array<ModelAcabamentosFilterInput | null> | null;
  not?: ModelAcabamentosFilterInput | null;
};

export type ModelAcabamentosConnection = {
  __typename: "ModelAcabamentosConnection";
  items?: Array<Acabamentos | null> | null;
  nextToken?: string | null;
};

export type ModelMateriaisFilterInput = {
  id?: ModelIDInput | null;
  descricao?: ModelStringInput | null;
  and?: Array<ModelMateriaisFilterInput | null> | null;
  or?: Array<ModelMateriaisFilterInput | null> | null;
  not?: ModelMateriaisFilterInput | null;
};

export type ModelMateriaisConnection = {
  __typename: "ModelMateriaisConnection";
  items?: Array<Materiais | null> | null;
  nextToken?: string | null;
};

export type ModelTecnologiasFilterInput = {
  id?: ModelIDInput | null;
  descricao?: ModelStringInput | null;
  and?: Array<ModelTecnologiasFilterInput | null> | null;
  or?: Array<ModelTecnologiasFilterInput | null> | null;
  not?: ModelTecnologiasFilterInput | null;
};

export type ModelTecnologiasConnection = {
  __typename: "ModelTecnologiasConnection";
  items?: Array<Tecnologias | null> | null;
  nextToken?: string | null;
};

export type CreateEnderecosMutation = {
  __typename: "Enderecos";
  id: string;
  numCEP: number;
  numero: number;
  complemento: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateEnderecosMutation = {
  __typename: "Enderecos";
  id: string;
  numCEP: number;
  numero: number;
  complemento: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteEnderecosMutation = {
  __typename: "Enderecos";
  id: string;
  numCEP: number;
  numero: number;
  complemento: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type CreateChatsMutation = {
  __typename: "Chats";
  id: string;
  usuarioEnvio: string;
  Proposta?: {
    __typename: "Propostas";
    id: string;
    Orcamento?: {
      __typename: "Orcamentos";
      id: string;
      arquivo: string;
      titulo: string;
      escala: number;
      situacao: SituacaoOrcamento;
      observacao?: string | null;
      usuario: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    idOrcamento: string;
    prazo: string;
    valor: string;
    frete: string;
    responsavelProposta: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  idProposta: string;
  msg: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateChatsMutation = {
  __typename: "Chats";
  id: string;
  usuarioEnvio: string;
  Proposta?: {
    __typename: "Propostas";
    id: string;
    Orcamento?: {
      __typename: "Orcamentos";
      id: string;
      arquivo: string;
      titulo: string;
      escala: number;
      situacao: SituacaoOrcamento;
      observacao?: string | null;
      usuario: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    idOrcamento: string;
    prazo: string;
    valor: string;
    frete: string;
    responsavelProposta: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  idProposta: string;
  msg: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteChatsMutation = {
  __typename: "Chats";
  id: string;
  usuarioEnvio: string;
  Proposta?: {
    __typename: "Propostas";
    id: string;
    Orcamento?: {
      __typename: "Orcamentos";
      id: string;
      arquivo: string;
      titulo: string;
      escala: number;
      situacao: SituacaoOrcamento;
      observacao?: string | null;
      usuario: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    idOrcamento: string;
    prazo: string;
    valor: string;
    frete: string;
    responsavelProposta: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  idProposta: string;
  msg: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateUsuariosMutation = {
  __typename: "Usuarios";
  id: string;
  cpf: string;
  nome: string;
  email: string;
  endereco?: {
    __typename: "Enderecos";
    id: string;
    numCEP: number;
    numero: number;
    complemento: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateUsuariosMutation = {
  __typename: "Usuarios";
  id: string;
  cpf: string;
  nome: string;
  email: string;
  endereco?: {
    __typename: "Enderecos";
    id: string;
    numCEP: number;
    numero: number;
    complemento: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteUsuariosMutation = {
  __typename: "Usuarios";
  id: string;
  cpf: string;
  nome: string;
  email: string;
  endereco?: {
    __typename: "Enderecos";
    id: string;
    numCEP: number;
    numero: number;
    complemento: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type CreateOrcamentosMutation = {
  __typename: "Orcamentos";
  id: string;
  arquivo: string;
  titulo: string;
  escala: number;
  Tecnologia: {
    __typename: "Tecnologias";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  };
  Material: {
    __typename: "Materiais";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  };
  Acabamento: {
    __typename: "Acabamentos";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  };
  Cor: {
    __typename: "Cores";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  };
  Proposta?: {
    __typename: "ModelPropostasConnection";
    items?: Array<{
      __typename: "Propostas";
      id: string;
      idOrcamento: string;
      prazo: string;
      valor: string;
      frete: string;
      responsavelProposta: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  situacao: SituacaoOrcamento;
  observacao?: string | null;
  usuario: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateOrcamentosMutation = {
  __typename: "Orcamentos";
  id: string;
  arquivo: string;
  titulo: string;
  escala: number;
  Tecnologia: {
    __typename: "Tecnologias";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  };
  Material: {
    __typename: "Materiais";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  };
  Acabamento: {
    __typename: "Acabamentos";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  };
  Cor: {
    __typename: "Cores";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  };
  Proposta?: {
    __typename: "ModelPropostasConnection";
    items?: Array<{
      __typename: "Propostas";
      id: string;
      idOrcamento: string;
      prazo: string;
      valor: string;
      frete: string;
      responsavelProposta: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  situacao: SituacaoOrcamento;
  observacao?: string | null;
  usuario: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteOrcamentosMutation = {
  __typename: "Orcamentos";
  id: string;
  arquivo: string;
  titulo: string;
  escala: number;
  Tecnologia: {
    __typename: "Tecnologias";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  };
  Material: {
    __typename: "Materiais";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  };
  Acabamento: {
    __typename: "Acabamentos";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  };
  Cor: {
    __typename: "Cores";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  };
  Proposta?: {
    __typename: "ModelPropostasConnection";
    items?: Array<{
      __typename: "Propostas";
      id: string;
      idOrcamento: string;
      prazo: string;
      valor: string;
      frete: string;
      responsavelProposta: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  situacao: SituacaoOrcamento;
  observacao?: string | null;
  usuario: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type CreatePropostasMutation = {
  __typename: "Propostas";
  id: string;
  Orcamento?: {
    __typename: "Orcamentos";
    id: string;
    arquivo: string;
    titulo: string;
    escala: number;
    Tecnologia: {
      __typename: "Tecnologias";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Material: {
      __typename: "Materiais";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Acabamento: {
      __typename: "Acabamentos";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Cor: {
      __typename: "Cores";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Proposta?: {
      __typename: "ModelPropostasConnection";
      nextToken?: string | null;
    } | null;
    situacao: SituacaoOrcamento;
    observacao?: string | null;
    usuario: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  idOrcamento: string;
  prazo: string;
  valor: string;
  frete: string;
  responsavelProposta: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdatePropostasMutation = {
  __typename: "Propostas";
  id: string;
  Orcamento?: {
    __typename: "Orcamentos";
    id: string;
    arquivo: string;
    titulo: string;
    escala: number;
    Tecnologia: {
      __typename: "Tecnologias";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Material: {
      __typename: "Materiais";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Acabamento: {
      __typename: "Acabamentos";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Cor: {
      __typename: "Cores";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Proposta?: {
      __typename: "ModelPropostasConnection";
      nextToken?: string | null;
    } | null;
    situacao: SituacaoOrcamento;
    observacao?: string | null;
    usuario: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  idOrcamento: string;
  prazo: string;
  valor: string;
  frete: string;
  responsavelProposta: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeletePropostasMutation = {
  __typename: "Propostas";
  id: string;
  Orcamento?: {
    __typename: "Orcamentos";
    id: string;
    arquivo: string;
    titulo: string;
    escala: number;
    Tecnologia: {
      __typename: "Tecnologias";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Material: {
      __typename: "Materiais";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Acabamento: {
      __typename: "Acabamentos";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Cor: {
      __typename: "Cores";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Proposta?: {
      __typename: "ModelPropostasConnection";
      nextToken?: string | null;
    } | null;
    situacao: SituacaoOrcamento;
    observacao?: string | null;
    usuario: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  idOrcamento: string;
  prazo: string;
  valor: string;
  frete: string;
  responsavelProposta: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type CreateCoresMutation = {
  __typename: "Cores";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCoresMutation = {
  __typename: "Cores";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCoresMutation = {
  __typename: "Cores";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateAcabamentosMutation = {
  __typename: "Acabamentos";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAcabamentosMutation = {
  __typename: "Acabamentos";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAcabamentosMutation = {
  __typename: "Acabamentos";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateMateriaisMutation = {
  __typename: "Materiais";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateMateriaisMutation = {
  __typename: "Materiais";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteMateriaisMutation = {
  __typename: "Materiais";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateTecnologiasMutation = {
  __typename: "Tecnologias";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTecnologiasMutation = {
  __typename: "Tecnologias";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTecnologiasMutation = {
  __typename: "Tecnologias";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type GetEnderecosQuery = {
  __typename: "Enderecos";
  id: string;
  numCEP: number;
  numero: number;
  complemento: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListEnderecosQuery = {
  __typename: "ModelEnderecosConnection";
  items?: Array<{
    __typename: "Enderecos";
    id: string;
    numCEP: number;
    numero: number;
    complemento: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetChatsQuery = {
  __typename: "Chats";
  id: string;
  usuarioEnvio: string;
  Proposta?: {
    __typename: "Propostas";
    id: string;
    Orcamento?: {
      __typename: "Orcamentos";
      id: string;
      arquivo: string;
      titulo: string;
      escala: number;
      situacao: SituacaoOrcamento;
      observacao?: string | null;
      usuario: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    idOrcamento: string;
    prazo: string;
    valor: string;
    frete: string;
    responsavelProposta: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  idProposta: string;
  msg: string;
  createdAt: string;
  updatedAt: string;
};

export type ListChatsQuery = {
  __typename: "ModelChatsConnection";
  items?: Array<{
    __typename: "Chats";
    id: string;
    usuarioEnvio: string;
    Proposta?: {
      __typename: "Propostas";
      id: string;
      idOrcamento: string;
      prazo: string;
      valor: string;
      frete: string;
      responsavelProposta: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    idProposta: string;
    msg: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetUsuariosQuery = {
  __typename: "Usuarios";
  id: string;
  cpf: string;
  nome: string;
  email: string;
  endereco?: {
    __typename: "Enderecos";
    id: string;
    numCEP: number;
    numero: number;
    complemento: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListUsuariosQuery = {
  __typename: "ModelUsuariosConnection";
  items?: Array<{
    __typename: "Usuarios";
    id: string;
    cpf: string;
    nome: string;
    email: string;
    endereco?: {
      __typename: "Enderecos";
      id: string;
      numCEP: number;
      numero: number;
      complemento: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetOrcamentosQuery = {
  __typename: "Orcamentos";
  id: string;
  arquivo: string;
  titulo: string;
  escala: number;
  Tecnologia: {
    __typename: "Tecnologias";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  };
  Material: {
    __typename: "Materiais";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  };
  Acabamento: {
    __typename: "Acabamentos";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  };
  Cor: {
    __typename: "Cores";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  };
  Proposta?: {
    __typename: "ModelPropostasConnection";
    items?: Array<{
      __typename: "Propostas";
      id: string;
      idOrcamento: string;
      prazo: string;
      valor: string;
      frete: string;
      responsavelProposta: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  situacao: SituacaoOrcamento;
  observacao?: string | null;
  usuario: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListOrcamentosQuery = {
  __typename: "ModelOrcamentosConnection";
  items?: Array<{
    __typename: "Orcamentos";
    id: string;
    arquivo: string;
    titulo: string;
    escala: number;
    Tecnologia: {
      __typename: "Tecnologias";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Material: {
      __typename: "Materiais";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Acabamento: {
      __typename: "Acabamentos";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Cor: {
      __typename: "Cores";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Proposta?: {
      __typename: "ModelPropostasConnection";
      nextToken?: string | null;
    } | null;
    situacao: SituacaoOrcamento;
    observacao?: string | null;
    usuario: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetPropostasQuery = {
  __typename: "Propostas";
  id: string;
  Orcamento?: {
    __typename: "Orcamentos";
    id: string;
    arquivo: string;
    titulo: string;
    escala: number;
    Tecnologia: {
      __typename: "Tecnologias";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Material: {
      __typename: "Materiais";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Acabamento: {
      __typename: "Acabamentos";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Cor: {
      __typename: "Cores";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Proposta?: {
      __typename: "ModelPropostasConnection";
      nextToken?: string | null;
    } | null;
    situacao: SituacaoOrcamento;
    observacao?: string | null;
    usuario: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  idOrcamento: string;
  prazo: string;
  valor: string;
  frete: string;
  responsavelProposta: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListPropostasQuery = {
  __typename: "ModelPropostasConnection";
  items?: Array<{
    __typename: "Propostas";
    id: string;
    Orcamento?: {
      __typename: "Orcamentos";
      id: string;
      arquivo: string;
      titulo: string;
      escala: number;
      situacao: SituacaoOrcamento;
      observacao?: string | null;
      usuario: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    idOrcamento: string;
    prazo: string;
    valor: string;
    frete: string;
    responsavelProposta: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetCoresQuery = {
  __typename: "Cores";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type ListCoresQuery = {
  __typename: "ModelCoresConnection";
  items?: Array<{
    __typename: "Cores";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetAcabamentosQuery = {
  __typename: "Acabamentos";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type ListAcabamentosQuery = {
  __typename: "ModelAcabamentosConnection";
  items?: Array<{
    __typename: "Acabamentos";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetMateriaisQuery = {
  __typename: "Materiais";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type ListMateriaisQuery = {
  __typename: "ModelMateriaisConnection";
  items?: Array<{
    __typename: "Materiais";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetTecnologiasQuery = {
  __typename: "Tecnologias";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type ListTecnologiasQuery = {
  __typename: "ModelTecnologiasConnection";
  items?: Array<{
    __typename: "Tecnologias";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateEnderecosSubscription = {
  __typename: "Enderecos";
  id: string;
  numCEP: number;
  numero: number;
  complemento: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateEnderecosSubscription = {
  __typename: "Enderecos";
  id: string;
  numCEP: number;
  numero: number;
  complemento: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteEnderecosSubscription = {
  __typename: "Enderecos";
  id: string;
  numCEP: number;
  numero: number;
  complemento: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnCreateChatsSubscription = {
  __typename: "Chats";
  id: string;
  usuarioEnvio: string;
  Proposta?: {
    __typename: "Propostas";
    id: string;
    Orcamento?: {
      __typename: "Orcamentos";
      id: string;
      arquivo: string;
      titulo: string;
      escala: number;
      situacao: SituacaoOrcamento;
      observacao?: string | null;
      usuario: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    idOrcamento: string;
    prazo: string;
    valor: string;
    frete: string;
    responsavelProposta: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  idProposta: string;
  msg: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateChatsSubscription = {
  __typename: "Chats";
  id: string;
  usuarioEnvio: string;
  Proposta?: {
    __typename: "Propostas";
    id: string;
    Orcamento?: {
      __typename: "Orcamentos";
      id: string;
      arquivo: string;
      titulo: string;
      escala: number;
      situacao: SituacaoOrcamento;
      observacao?: string | null;
      usuario: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    idOrcamento: string;
    prazo: string;
    valor: string;
    frete: string;
    responsavelProposta: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  idProposta: string;
  msg: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteChatsSubscription = {
  __typename: "Chats";
  id: string;
  usuarioEnvio: string;
  Proposta?: {
    __typename: "Propostas";
    id: string;
    Orcamento?: {
      __typename: "Orcamentos";
      id: string;
      arquivo: string;
      titulo: string;
      escala: number;
      situacao: SituacaoOrcamento;
      observacao?: string | null;
      usuario: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    idOrcamento: string;
    prazo: string;
    valor: string;
    frete: string;
    responsavelProposta: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  idProposta: string;
  msg: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateUsuariosSubscription = {
  __typename: "Usuarios";
  id: string;
  cpf: string;
  nome: string;
  email: string;
  endereco?: {
    __typename: "Enderecos";
    id: string;
    numCEP: number;
    numero: number;
    complemento: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateUsuariosSubscription = {
  __typename: "Usuarios";
  id: string;
  cpf: string;
  nome: string;
  email: string;
  endereco?: {
    __typename: "Enderecos";
    id: string;
    numCEP: number;
    numero: number;
    complemento: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteUsuariosSubscription = {
  __typename: "Usuarios";
  id: string;
  cpf: string;
  nome: string;
  email: string;
  endereco?: {
    __typename: "Enderecos";
    id: string;
    numCEP: number;
    numero: number;
    complemento: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnCreateOrcamentosSubscription = {
  __typename: "Orcamentos";
  id: string;
  arquivo: string;
  titulo: string;
  escala: number;
  Tecnologia: {
    __typename: "Tecnologias";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  };
  Material: {
    __typename: "Materiais";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  };
  Acabamento: {
    __typename: "Acabamentos";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  };
  Cor: {
    __typename: "Cores";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  };
  Proposta?: {
    __typename: "ModelPropostasConnection";
    items?: Array<{
      __typename: "Propostas";
      id: string;
      idOrcamento: string;
      prazo: string;
      valor: string;
      frete: string;
      responsavelProposta: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  situacao: SituacaoOrcamento;
  observacao?: string | null;
  usuario: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateOrcamentosSubscription = {
  __typename: "Orcamentos";
  id: string;
  arquivo: string;
  titulo: string;
  escala: number;
  Tecnologia: {
    __typename: "Tecnologias";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  };
  Material: {
    __typename: "Materiais";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  };
  Acabamento: {
    __typename: "Acabamentos";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  };
  Cor: {
    __typename: "Cores";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  };
  Proposta?: {
    __typename: "ModelPropostasConnection";
    items?: Array<{
      __typename: "Propostas";
      id: string;
      idOrcamento: string;
      prazo: string;
      valor: string;
      frete: string;
      responsavelProposta: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  situacao: SituacaoOrcamento;
  observacao?: string | null;
  usuario: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteOrcamentosSubscription = {
  __typename: "Orcamentos";
  id: string;
  arquivo: string;
  titulo: string;
  escala: number;
  Tecnologia: {
    __typename: "Tecnologias";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  };
  Material: {
    __typename: "Materiais";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  };
  Acabamento: {
    __typename: "Acabamentos";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  };
  Cor: {
    __typename: "Cores";
    id: string;
    descricao: string;
    createdAt: string;
    updatedAt: string;
  };
  Proposta?: {
    __typename: "ModelPropostasConnection";
    items?: Array<{
      __typename: "Propostas";
      id: string;
      idOrcamento: string;
      prazo: string;
      valor: string;
      frete: string;
      responsavelProposta: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  situacao: SituacaoOrcamento;
  observacao?: string | null;
  usuario: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnCreatePropostasSubscription = {
  __typename: "Propostas";
  id: string;
  Orcamento?: {
    __typename: "Orcamentos";
    id: string;
    arquivo: string;
    titulo: string;
    escala: number;
    Tecnologia: {
      __typename: "Tecnologias";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Material: {
      __typename: "Materiais";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Acabamento: {
      __typename: "Acabamentos";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Cor: {
      __typename: "Cores";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Proposta?: {
      __typename: "ModelPropostasConnection";
      nextToken?: string | null;
    } | null;
    situacao: SituacaoOrcamento;
    observacao?: string | null;
    usuario: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  idOrcamento: string;
  prazo: string;
  valor: string;
  frete: string;
  responsavelProposta: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdatePropostasSubscription = {
  __typename: "Propostas";
  id: string;
  Orcamento?: {
    __typename: "Orcamentos";
    id: string;
    arquivo: string;
    titulo: string;
    escala: number;
    Tecnologia: {
      __typename: "Tecnologias";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Material: {
      __typename: "Materiais";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Acabamento: {
      __typename: "Acabamentos";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Cor: {
      __typename: "Cores";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Proposta?: {
      __typename: "ModelPropostasConnection";
      nextToken?: string | null;
    } | null;
    situacao: SituacaoOrcamento;
    observacao?: string | null;
    usuario: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  idOrcamento: string;
  prazo: string;
  valor: string;
  frete: string;
  responsavelProposta: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeletePropostasSubscription = {
  __typename: "Propostas";
  id: string;
  Orcamento?: {
    __typename: "Orcamentos";
    id: string;
    arquivo: string;
    titulo: string;
    escala: number;
    Tecnologia: {
      __typename: "Tecnologias";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Material: {
      __typename: "Materiais";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Acabamento: {
      __typename: "Acabamentos";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Cor: {
      __typename: "Cores";
      id: string;
      descricao: string;
      createdAt: string;
      updatedAt: string;
    };
    Proposta?: {
      __typename: "ModelPropostasConnection";
      nextToken?: string | null;
    } | null;
    situacao: SituacaoOrcamento;
    observacao?: string | null;
    usuario: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  idOrcamento: string;
  prazo: string;
  valor: string;
  frete: string;
  responsavelProposta: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnCreateCoresSubscription = {
  __typename: "Cores";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCoresSubscription = {
  __typename: "Cores";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCoresSubscription = {
  __typename: "Cores";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateAcabamentosSubscription = {
  __typename: "Acabamentos";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAcabamentosSubscription = {
  __typename: "Acabamentos";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAcabamentosSubscription = {
  __typename: "Acabamentos";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateMateriaisSubscription = {
  __typename: "Materiais";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateMateriaisSubscription = {
  __typename: "Materiais";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteMateriaisSubscription = {
  __typename: "Materiais";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateTecnologiasSubscription = {
  __typename: "Tecnologias";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTecnologiasSubscription = {
  __typename: "Tecnologias";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTecnologiasSubscription = {
  __typename: "Tecnologias";
  id: string;
  descricao: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateEnderecos(
    input: CreateEnderecosInput,
    condition?: ModelEnderecosConditionInput
  ): Promise<CreateEnderecosMutation> {
    const statement = `mutation CreateEnderecos($input: CreateEnderecosInput!, $condition: ModelEnderecosConditionInput) {
        createEnderecos(input: $input, condition: $condition) {
          __typename
          id
          numCEP
          numero
          complemento
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEnderecosMutation>response.data.createEnderecos;
  }
  async UpdateEnderecos(
    input: UpdateEnderecosInput,
    condition?: ModelEnderecosConditionInput
  ): Promise<UpdateEnderecosMutation> {
    const statement = `mutation UpdateEnderecos($input: UpdateEnderecosInput!, $condition: ModelEnderecosConditionInput) {
        updateEnderecos(input: $input, condition: $condition) {
          __typename
          id
          numCEP
          numero
          complemento
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEnderecosMutation>response.data.updateEnderecos;
  }
  async DeleteEnderecos(
    input: DeleteEnderecosInput,
    condition?: ModelEnderecosConditionInput
  ): Promise<DeleteEnderecosMutation> {
    const statement = `mutation DeleteEnderecos($input: DeleteEnderecosInput!, $condition: ModelEnderecosConditionInput) {
        deleteEnderecos(input: $input, condition: $condition) {
          __typename
          id
          numCEP
          numero
          complemento
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEnderecosMutation>response.data.deleteEnderecos;
  }
  async CreateChats(
    input: CreateChatsInput,
    condition?: ModelChatsConditionInput
  ): Promise<CreateChatsMutation> {
    const statement = `mutation CreateChats($input: CreateChatsInput!, $condition: ModelChatsConditionInput) {
        createChats(input: $input, condition: $condition) {
          __typename
          id
          usuarioEnvio
          Proposta {
            __typename
            id
            Orcamento {
              __typename
              id
              arquivo
              titulo
              escala
              situacao
              observacao
              usuario
              createdAt
              updatedAt
              owner
            }
            idOrcamento
            prazo
            valor
            frete
            responsavelProposta
            createdAt
            updatedAt
            owner
          }
          idProposta
          msg
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateChatsMutation>response.data.createChats;
  }
  async UpdateChats(
    input: UpdateChatsInput,
    condition?: ModelChatsConditionInput
  ): Promise<UpdateChatsMutation> {
    const statement = `mutation UpdateChats($input: UpdateChatsInput!, $condition: ModelChatsConditionInput) {
        updateChats(input: $input, condition: $condition) {
          __typename
          id
          usuarioEnvio
          Proposta {
            __typename
            id
            Orcamento {
              __typename
              id
              arquivo
              titulo
              escala
              situacao
              observacao
              usuario
              createdAt
              updatedAt
              owner
            }
            idOrcamento
            prazo
            valor
            frete
            responsavelProposta
            createdAt
            updatedAt
            owner
          }
          idProposta
          msg
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateChatsMutation>response.data.updateChats;
  }
  async DeleteChats(
    input: DeleteChatsInput,
    condition?: ModelChatsConditionInput
  ): Promise<DeleteChatsMutation> {
    const statement = `mutation DeleteChats($input: DeleteChatsInput!, $condition: ModelChatsConditionInput) {
        deleteChats(input: $input, condition: $condition) {
          __typename
          id
          usuarioEnvio
          Proposta {
            __typename
            id
            Orcamento {
              __typename
              id
              arquivo
              titulo
              escala
              situacao
              observacao
              usuario
              createdAt
              updatedAt
              owner
            }
            idOrcamento
            prazo
            valor
            frete
            responsavelProposta
            createdAt
            updatedAt
            owner
          }
          idProposta
          msg
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteChatsMutation>response.data.deleteChats;
  }
  async CreateUsuarios(
    input: CreateUsuariosInput,
    condition?: ModelUsuariosConditionInput
  ): Promise<CreateUsuariosMutation> {
    const statement = `mutation CreateUsuarios($input: CreateUsuariosInput!, $condition: ModelUsuariosConditionInput) {
        createUsuarios(input: $input, condition: $condition) {
          __typename
          id
          cpf
          nome
          email
          endereco {
            __typename
            id
            numCEP
            numero
            complemento
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUsuariosMutation>response.data.createUsuarios;
  }
  async UpdateUsuarios(
    input: UpdateUsuariosInput,
    condition?: ModelUsuariosConditionInput
  ): Promise<UpdateUsuariosMutation> {
    const statement = `mutation UpdateUsuarios($input: UpdateUsuariosInput!, $condition: ModelUsuariosConditionInput) {
        updateUsuarios(input: $input, condition: $condition) {
          __typename
          id
          cpf
          nome
          email
          endereco {
            __typename
            id
            numCEP
            numero
            complemento
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUsuariosMutation>response.data.updateUsuarios;
  }
  async DeleteUsuarios(
    input: DeleteUsuariosInput,
    condition?: ModelUsuariosConditionInput
  ): Promise<DeleteUsuariosMutation> {
    const statement = `mutation DeleteUsuarios($input: DeleteUsuariosInput!, $condition: ModelUsuariosConditionInput) {
        deleteUsuarios(input: $input, condition: $condition) {
          __typename
          id
          cpf
          nome
          email
          endereco {
            __typename
            id
            numCEP
            numero
            complemento
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUsuariosMutation>response.data.deleteUsuarios;
  }
  async CreateOrcamentos(
    input: CreateOrcamentosInput,
    condition?: ModelOrcamentosConditionInput
  ): Promise<CreateOrcamentosMutation> {
    const statement = `mutation CreateOrcamentos($input: CreateOrcamentosInput!, $condition: ModelOrcamentosConditionInput) {
        createOrcamentos(input: $input, condition: $condition) {
          __typename
          id
          arquivo
          titulo
          escala
          Tecnologia {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          Material {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          Acabamento {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          Cor {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          Proposta {
            __typename
            items {
              __typename
              id
              idOrcamento
              prazo
              valor
              frete
              responsavelProposta
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          situacao
          observacao
          usuario
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateOrcamentosMutation>response.data.createOrcamentos;
  }
  async UpdateOrcamentos(
    input: UpdateOrcamentosInput,
    condition?: ModelOrcamentosConditionInput
  ): Promise<UpdateOrcamentosMutation> {
    const statement = `mutation UpdateOrcamentos($input: UpdateOrcamentosInput!, $condition: ModelOrcamentosConditionInput) {
        updateOrcamentos(input: $input, condition: $condition) {
          __typename
          id
          arquivo
          titulo
          escala
          Tecnologia {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          Material {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          Acabamento {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          Cor {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          Proposta {
            __typename
            items {
              __typename
              id
              idOrcamento
              prazo
              valor
              frete
              responsavelProposta
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          situacao
          observacao
          usuario
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateOrcamentosMutation>response.data.updateOrcamentos;
  }
  async DeleteOrcamentos(
    input: DeleteOrcamentosInput,
    condition?: ModelOrcamentosConditionInput
  ): Promise<DeleteOrcamentosMutation> {
    const statement = `mutation DeleteOrcamentos($input: DeleteOrcamentosInput!, $condition: ModelOrcamentosConditionInput) {
        deleteOrcamentos(input: $input, condition: $condition) {
          __typename
          id
          arquivo
          titulo
          escala
          Tecnologia {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          Material {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          Acabamento {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          Cor {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          Proposta {
            __typename
            items {
              __typename
              id
              idOrcamento
              prazo
              valor
              frete
              responsavelProposta
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          situacao
          observacao
          usuario
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteOrcamentosMutation>response.data.deleteOrcamentos;
  }
  async CreatePropostas(
    input: CreatePropostasInput,
    condition?: ModelPropostasConditionInput
  ): Promise<CreatePropostasMutation> {
    const statement = `mutation CreatePropostas($input: CreatePropostasInput!, $condition: ModelPropostasConditionInput) {
        createPropostas(input: $input, condition: $condition) {
          __typename
          id
          Orcamento {
            __typename
            id
            arquivo
            titulo
            escala
            Tecnologia {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Material {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Acabamento {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Cor {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Proposta {
              __typename
              nextToken
            }
            situacao
            observacao
            usuario
            createdAt
            updatedAt
            owner
          }
          idOrcamento
          prazo
          valor
          frete
          responsavelProposta
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePropostasMutation>response.data.createPropostas;
  }
  async UpdatePropostas(
    input: UpdatePropostasInput,
    condition?: ModelPropostasConditionInput
  ): Promise<UpdatePropostasMutation> {
    const statement = `mutation UpdatePropostas($input: UpdatePropostasInput!, $condition: ModelPropostasConditionInput) {
        updatePropostas(input: $input, condition: $condition) {
          __typename
          id
          Orcamento {
            __typename
            id
            arquivo
            titulo
            escala
            Tecnologia {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Material {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Acabamento {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Cor {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Proposta {
              __typename
              nextToken
            }
            situacao
            observacao
            usuario
            createdAt
            updatedAt
            owner
          }
          idOrcamento
          prazo
          valor
          frete
          responsavelProposta
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePropostasMutation>response.data.updatePropostas;
  }
  async DeletePropostas(
    input: DeletePropostasInput,
    condition?: ModelPropostasConditionInput
  ): Promise<DeletePropostasMutation> {
    const statement = `mutation DeletePropostas($input: DeletePropostasInput!, $condition: ModelPropostasConditionInput) {
        deletePropostas(input: $input, condition: $condition) {
          __typename
          id
          Orcamento {
            __typename
            id
            arquivo
            titulo
            escala
            Tecnologia {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Material {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Acabamento {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Cor {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Proposta {
              __typename
              nextToken
            }
            situacao
            observacao
            usuario
            createdAt
            updatedAt
            owner
          }
          idOrcamento
          prazo
          valor
          frete
          responsavelProposta
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePropostasMutation>response.data.deletePropostas;
  }
  async CreateCores(
    input: CreateCoresInput,
    condition?: ModelCoresConditionInput
  ): Promise<CreateCoresMutation> {
    const statement = `mutation CreateCores($input: CreateCoresInput!, $condition: ModelCoresConditionInput) {
        createCores(input: $input, condition: $condition) {
          __typename
          id
          descricao
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCoresMutation>response.data.createCores;
  }
  async UpdateCores(
    input: UpdateCoresInput,
    condition?: ModelCoresConditionInput
  ): Promise<UpdateCoresMutation> {
    const statement = `mutation UpdateCores($input: UpdateCoresInput!, $condition: ModelCoresConditionInput) {
        updateCores(input: $input, condition: $condition) {
          __typename
          id
          descricao
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCoresMutation>response.data.updateCores;
  }
  async DeleteCores(
    input: DeleteCoresInput,
    condition?: ModelCoresConditionInput
  ): Promise<DeleteCoresMutation> {
    const statement = `mutation DeleteCores($input: DeleteCoresInput!, $condition: ModelCoresConditionInput) {
        deleteCores(input: $input, condition: $condition) {
          __typename
          id
          descricao
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCoresMutation>response.data.deleteCores;
  }
  async CreateAcabamentos(
    input: CreateAcabamentosInput,
    condition?: ModelAcabamentosConditionInput
  ): Promise<CreateAcabamentosMutation> {
    const statement = `mutation CreateAcabamentos($input: CreateAcabamentosInput!, $condition: ModelAcabamentosConditionInput) {
        createAcabamentos(input: $input, condition: $condition) {
          __typename
          id
          descricao
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAcabamentosMutation>response.data.createAcabamentos;
  }
  async UpdateAcabamentos(
    input: UpdateAcabamentosInput,
    condition?: ModelAcabamentosConditionInput
  ): Promise<UpdateAcabamentosMutation> {
    const statement = `mutation UpdateAcabamentos($input: UpdateAcabamentosInput!, $condition: ModelAcabamentosConditionInput) {
        updateAcabamentos(input: $input, condition: $condition) {
          __typename
          id
          descricao
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAcabamentosMutation>response.data.updateAcabamentos;
  }
  async DeleteAcabamentos(
    input: DeleteAcabamentosInput,
    condition?: ModelAcabamentosConditionInput
  ): Promise<DeleteAcabamentosMutation> {
    const statement = `mutation DeleteAcabamentos($input: DeleteAcabamentosInput!, $condition: ModelAcabamentosConditionInput) {
        deleteAcabamentos(input: $input, condition: $condition) {
          __typename
          id
          descricao
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAcabamentosMutation>response.data.deleteAcabamentos;
  }
  async CreateMateriais(
    input: CreateMateriaisInput,
    condition?: ModelMateriaisConditionInput
  ): Promise<CreateMateriaisMutation> {
    const statement = `mutation CreateMateriais($input: CreateMateriaisInput!, $condition: ModelMateriaisConditionInput) {
        createMateriais(input: $input, condition: $condition) {
          __typename
          id
          descricao
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMateriaisMutation>response.data.createMateriais;
  }
  async UpdateMateriais(
    input: UpdateMateriaisInput,
    condition?: ModelMateriaisConditionInput
  ): Promise<UpdateMateriaisMutation> {
    const statement = `mutation UpdateMateriais($input: UpdateMateriaisInput!, $condition: ModelMateriaisConditionInput) {
        updateMateriais(input: $input, condition: $condition) {
          __typename
          id
          descricao
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateMateriaisMutation>response.data.updateMateriais;
  }
  async DeleteMateriais(
    input: DeleteMateriaisInput,
    condition?: ModelMateriaisConditionInput
  ): Promise<DeleteMateriaisMutation> {
    const statement = `mutation DeleteMateriais($input: DeleteMateriaisInput!, $condition: ModelMateriaisConditionInput) {
        deleteMateriais(input: $input, condition: $condition) {
          __typename
          id
          descricao
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteMateriaisMutation>response.data.deleteMateriais;
  }
  async CreateTecnologias(
    input: CreateTecnologiasInput,
    condition?: ModelTecnologiasConditionInput
  ): Promise<CreateTecnologiasMutation> {
    const statement = `mutation CreateTecnologias($input: CreateTecnologiasInput!, $condition: ModelTecnologiasConditionInput) {
        createTecnologias(input: $input, condition: $condition) {
          __typename
          id
          descricao
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTecnologiasMutation>response.data.createTecnologias;
  }
  async UpdateTecnologias(
    input: UpdateTecnologiasInput,
    condition?: ModelTecnologiasConditionInput
  ): Promise<UpdateTecnologiasMutation> {
    const statement = `mutation UpdateTecnologias($input: UpdateTecnologiasInput!, $condition: ModelTecnologiasConditionInput) {
        updateTecnologias(input: $input, condition: $condition) {
          __typename
          id
          descricao
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTecnologiasMutation>response.data.updateTecnologias;
  }
  async DeleteTecnologias(
    input: DeleteTecnologiasInput,
    condition?: ModelTecnologiasConditionInput
  ): Promise<DeleteTecnologiasMutation> {
    const statement = `mutation DeleteTecnologias($input: DeleteTecnologiasInput!, $condition: ModelTecnologiasConditionInput) {
        deleteTecnologias(input: $input, condition: $condition) {
          __typename
          id
          descricao
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTecnologiasMutation>response.data.deleteTecnologias;
  }
  async GetEnderecos(id: string): Promise<GetEnderecosQuery> {
    const statement = `query GetEnderecos($id: ID!) {
        getEnderecos(id: $id) {
          __typename
          id
          numCEP
          numero
          complemento
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEnderecosQuery>response.data.getEnderecos;
  }
  async ListEnderecos(
    filter?: ModelEnderecosFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEnderecosQuery> {
    const statement = `query ListEnderecos($filter: ModelEnderecosFilterInput, $limit: Int, $nextToken: String) {
        listEnderecos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            numCEP
            numero
            complemento
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEnderecosQuery>response.data.listEnderecos;
  }
  async GetChats(id: string): Promise<GetChatsQuery> {
    const statement = `query GetChats($id: ID!) {
        getChats(id: $id) {
          __typename
          id
          usuarioEnvio
          Proposta {
            __typename
            id
            Orcamento {
              __typename
              id
              arquivo
              titulo
              escala
              situacao
              observacao
              usuario
              createdAt
              updatedAt
              owner
            }
            idOrcamento
            prazo
            valor
            frete
            responsavelProposta
            createdAt
            updatedAt
            owner
          }
          idProposta
          msg
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetChatsQuery>response.data.getChats;
  }
  async ListChats(
    filter?: ModelChatsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListChatsQuery> {
    const statement = `query ListChats($filter: ModelChatsFilterInput, $limit: Int, $nextToken: String) {
        listChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            usuarioEnvio
            Proposta {
              __typename
              id
              idOrcamento
              prazo
              valor
              frete
              responsavelProposta
              createdAt
              updatedAt
              owner
            }
            idProposta
            msg
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListChatsQuery>response.data.listChats;
  }
  async GetUsuarios(id: string): Promise<GetUsuariosQuery> {
    const statement = `query GetUsuarios($id: ID!) {
        getUsuarios(id: $id) {
          __typename
          id
          cpf
          nome
          email
          endereco {
            __typename
            id
            numCEP
            numero
            complemento
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUsuariosQuery>response.data.getUsuarios;
  }
  async ListUsuarios(
    filter?: ModelUsuariosFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsuariosQuery> {
    const statement = `query ListUsuarios($filter: ModelUsuariosFilterInput, $limit: Int, $nextToken: String) {
        listUsuarios(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            cpf
            nome
            email
            endereco {
              __typename
              id
              numCEP
              numero
              complemento
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsuariosQuery>response.data.listUsuarios;
  }
  async GetOrcamentos(id: string): Promise<GetOrcamentosQuery> {
    const statement = `query GetOrcamentos($id: ID!) {
        getOrcamentos(id: $id) {
          __typename
          id
          arquivo
          titulo
          escala
          Tecnologia {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          Material {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          Acabamento {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          Cor {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          Proposta {
            __typename
            items {
              __typename
              id
              idOrcamento
              prazo
              valor
              frete
              responsavelProposta
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          situacao
          observacao
          usuario
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetOrcamentosQuery>response.data.getOrcamentos;
  }
  async ListOrcamentos(
    filter?: ModelOrcamentosFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListOrcamentosQuery> {
    const statement = `query ListOrcamentos($filter: ModelOrcamentosFilterInput, $limit: Int, $nextToken: String) {
        listOrcamentos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            arquivo
            titulo
            escala
            Tecnologia {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Material {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Acabamento {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Cor {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Proposta {
              __typename
              nextToken
            }
            situacao
            observacao
            usuario
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListOrcamentosQuery>response.data.listOrcamentos;
  }
  async GetPropostas(id: string): Promise<GetPropostasQuery> {
    const statement = `query GetPropostas($id: ID!) {
        getPropostas(id: $id) {
          __typename
          id
          Orcamento {
            __typename
            id
            arquivo
            titulo
            escala
            Tecnologia {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Material {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Acabamento {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Cor {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Proposta {
              __typename
              nextToken
            }
            situacao
            observacao
            usuario
            createdAt
            updatedAt
            owner
          }
          idOrcamento
          prazo
          valor
          frete
          responsavelProposta
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPropostasQuery>response.data.getPropostas;
  }
  async ListPropostas(
    filter?: ModelPropostasFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPropostasQuery> {
    const statement = `query ListPropostas($filter: ModelPropostasFilterInput, $limit: Int, $nextToken: String) {
        listPropostas(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            Orcamento {
              __typename
              id
              arquivo
              titulo
              escala
              situacao
              observacao
              usuario
              createdAt
              updatedAt
              owner
            }
            idOrcamento
            prazo
            valor
            frete
            responsavelProposta
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPropostasQuery>response.data.listPropostas;
  }
  async GetCores(id: string): Promise<GetCoresQuery> {
    const statement = `query GetCores($id: ID!) {
        getCores(id: $id) {
          __typename
          id
          descricao
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCoresQuery>response.data.getCores;
  }
  async ListCores(
    filter?: ModelCoresFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCoresQuery> {
    const statement = `query ListCores($filter: ModelCoresFilterInput, $limit: Int, $nextToken: String) {
        listCores(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCoresQuery>response.data.listCores;
  }
  async GetAcabamentos(id: string): Promise<GetAcabamentosQuery> {
    const statement = `query GetAcabamentos($id: ID!) {
        getAcabamentos(id: $id) {
          __typename
          id
          descricao
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAcabamentosQuery>response.data.getAcabamentos;
  }
  async ListAcabamentos(
    filter?: ModelAcabamentosFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAcabamentosQuery> {
    const statement = `query ListAcabamentos($filter: ModelAcabamentosFilterInput, $limit: Int, $nextToken: String) {
        listAcabamentos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAcabamentosQuery>response.data.listAcabamentos;
  }
  async GetMateriais(id: string): Promise<GetMateriaisQuery> {
    const statement = `query GetMateriais($id: ID!) {
        getMateriais(id: $id) {
          __typename
          id
          descricao
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMateriaisQuery>response.data.getMateriais;
  }
  async ListMateriais(
    filter?: ModelMateriaisFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMateriaisQuery> {
    const statement = `query ListMateriais($filter: ModelMateriaisFilterInput, $limit: Int, $nextToken: String) {
        listMateriais(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListMateriaisQuery>response.data.listMateriais;
  }
  async GetTecnologias(id: string): Promise<GetTecnologiasQuery> {
    const statement = `query GetTecnologias($id: ID!) {
        getTecnologias(id: $id) {
          __typename
          id
          descricao
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTecnologiasQuery>response.data.getTecnologias;
  }
  async ListTecnologias(
    filter?: ModelTecnologiasFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTecnologiasQuery> {
    const statement = `query ListTecnologias($filter: ModelTecnologiasFilterInput, $limit: Int, $nextToken: String) {
        listTecnologias(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTecnologiasQuery>response.data.listTecnologias;
  }
  OnCreateEnderecosListener(
    owner?: string
  ): Observable<SubscriptionResponse<OnCreateEnderecosSubscription>> {
    const statement = `subscription OnCreateEnderecos($owner: String) {
        onCreateEnderecos(owner: $owner) {
          __typename
          id
          numCEP
          numero
          complemento
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnCreateEnderecosSubscription>>;
  }

  OnUpdateEnderecosListener(
    owner?: string
  ): Observable<SubscriptionResponse<OnUpdateEnderecosSubscription>> {
    const statement = `subscription OnUpdateEnderecos($owner: String) {
        onUpdateEnderecos(owner: $owner) {
          __typename
          id
          numCEP
          numero
          complemento
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnUpdateEnderecosSubscription>>;
  }

  OnDeleteEnderecosListener(
    owner?: string
  ): Observable<SubscriptionResponse<OnDeleteEnderecosSubscription>> {
    const statement = `subscription OnDeleteEnderecos($owner: String) {
        onDeleteEnderecos(owner: $owner) {
          __typename
          id
          numCEP
          numero
          complemento
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnDeleteEnderecosSubscription>>;
  }

  OnCreateChatsListener: Observable<
    SubscriptionResponse<OnCreateChatsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateChats {
        onCreateChats {
          __typename
          id
          usuarioEnvio
          Proposta {
            __typename
            id
            Orcamento {
              __typename
              id
              arquivo
              titulo
              escala
              situacao
              observacao
              usuario
              createdAt
              updatedAt
              owner
            }
            idOrcamento
            prazo
            valor
            frete
            responsavelProposta
            createdAt
            updatedAt
            owner
          }
          idProposta
          msg
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateChatsSubscription>>;

  OnUpdateChatsListener: Observable<
    SubscriptionResponse<OnUpdateChatsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateChats {
        onUpdateChats {
          __typename
          id
          usuarioEnvio
          Proposta {
            __typename
            id
            Orcamento {
              __typename
              id
              arquivo
              titulo
              escala
              situacao
              observacao
              usuario
              createdAt
              updatedAt
              owner
            }
            idOrcamento
            prazo
            valor
            frete
            responsavelProposta
            createdAt
            updatedAt
            owner
          }
          idProposta
          msg
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateChatsSubscription>>;

  OnDeleteChatsListener: Observable<
    SubscriptionResponse<OnDeleteChatsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteChats {
        onDeleteChats {
          __typename
          id
          usuarioEnvio
          Proposta {
            __typename
            id
            Orcamento {
              __typename
              id
              arquivo
              titulo
              escala
              situacao
              observacao
              usuario
              createdAt
              updatedAt
              owner
            }
            idOrcamento
            prazo
            valor
            frete
            responsavelProposta
            createdAt
            updatedAt
            owner
          }
          idProposta
          msg
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteChatsSubscription>>;

  OnCreateUsuariosListener(
    owner?: string
  ): Observable<SubscriptionResponse<OnCreateUsuariosSubscription>> {
    const statement = `subscription OnCreateUsuarios($owner: String) {
        onCreateUsuarios(owner: $owner) {
          __typename
          id
          cpf
          nome
          email
          endereco {
            __typename
            id
            numCEP
            numero
            complemento
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnCreateUsuariosSubscription>>;
  }

  OnUpdateUsuariosListener(
    owner?: string
  ): Observable<SubscriptionResponse<OnUpdateUsuariosSubscription>> {
    const statement = `subscription OnUpdateUsuarios($owner: String) {
        onUpdateUsuarios(owner: $owner) {
          __typename
          id
          cpf
          nome
          email
          endereco {
            __typename
            id
            numCEP
            numero
            complemento
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnUpdateUsuariosSubscription>>;
  }

  OnDeleteUsuariosListener(
    owner?: string
  ): Observable<SubscriptionResponse<OnDeleteUsuariosSubscription>> {
    const statement = `subscription OnDeleteUsuarios($owner: String) {
        onDeleteUsuarios(owner: $owner) {
          __typename
          id
          cpf
          nome
          email
          endereco {
            __typename
            id
            numCEP
            numero
            complemento
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnDeleteUsuariosSubscription>>;
  }

  OnCreateOrcamentosListener: Observable<
    SubscriptionResponse<OnCreateOrcamentosSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateOrcamentos {
        onCreateOrcamentos {
          __typename
          id
          arquivo
          titulo
          escala
          Tecnologia {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          Material {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          Acabamento {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          Cor {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          Proposta {
            __typename
            items {
              __typename
              id
              idOrcamento
              prazo
              valor
              frete
              responsavelProposta
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          situacao
          observacao
          usuario
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateOrcamentosSubscription>>;

  OnUpdateOrcamentosListener: Observable<
    SubscriptionResponse<OnUpdateOrcamentosSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateOrcamentos {
        onUpdateOrcamentos {
          __typename
          id
          arquivo
          titulo
          escala
          Tecnologia {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          Material {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          Acabamento {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          Cor {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          Proposta {
            __typename
            items {
              __typename
              id
              idOrcamento
              prazo
              valor
              frete
              responsavelProposta
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          situacao
          observacao
          usuario
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateOrcamentosSubscription>>;

  OnDeleteOrcamentosListener: Observable<
    SubscriptionResponse<OnDeleteOrcamentosSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteOrcamentos {
        onDeleteOrcamentos {
          __typename
          id
          arquivo
          titulo
          escala
          Tecnologia {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          Material {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          Acabamento {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          Cor {
            __typename
            id
            descricao
            createdAt
            updatedAt
          }
          Proposta {
            __typename
            items {
              __typename
              id
              idOrcamento
              prazo
              valor
              frete
              responsavelProposta
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          situacao
          observacao
          usuario
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteOrcamentosSubscription>>;

  OnCreatePropostasListener: Observable<
    SubscriptionResponse<OnCreatePropostasSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePropostas {
        onCreatePropostas {
          __typename
          id
          Orcamento {
            __typename
            id
            arquivo
            titulo
            escala
            Tecnologia {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Material {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Acabamento {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Cor {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Proposta {
              __typename
              nextToken
            }
            situacao
            observacao
            usuario
            createdAt
            updatedAt
            owner
          }
          idOrcamento
          prazo
          valor
          frete
          responsavelProposta
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePropostasSubscription>>;

  OnUpdatePropostasListener: Observable<
    SubscriptionResponse<OnUpdatePropostasSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePropostas {
        onUpdatePropostas {
          __typename
          id
          Orcamento {
            __typename
            id
            arquivo
            titulo
            escala
            Tecnologia {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Material {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Acabamento {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Cor {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Proposta {
              __typename
              nextToken
            }
            situacao
            observacao
            usuario
            createdAt
            updatedAt
            owner
          }
          idOrcamento
          prazo
          valor
          frete
          responsavelProposta
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePropostasSubscription>>;

  OnDeletePropostasListener: Observable<
    SubscriptionResponse<OnDeletePropostasSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePropostas {
        onDeletePropostas {
          __typename
          id
          Orcamento {
            __typename
            id
            arquivo
            titulo
            escala
            Tecnologia {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Material {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Acabamento {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Cor {
              __typename
              id
              descricao
              createdAt
              updatedAt
            }
            Proposta {
              __typename
              nextToken
            }
            situacao
            observacao
            usuario
            createdAt
            updatedAt
            owner
          }
          idOrcamento
          prazo
          valor
          frete
          responsavelProposta
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePropostasSubscription>>;

  OnCreateCoresListener: Observable<
    SubscriptionResponse<OnCreateCoresSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCores {
        onCreateCores {
          __typename
          id
          descricao
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCoresSubscription>>;

  OnUpdateCoresListener: Observable<
    SubscriptionResponse<OnUpdateCoresSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCores {
        onUpdateCores {
          __typename
          id
          descricao
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCoresSubscription>>;

  OnDeleteCoresListener: Observable<
    SubscriptionResponse<OnDeleteCoresSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCores {
        onDeleteCores {
          __typename
          id
          descricao
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCoresSubscription>>;

  OnCreateAcabamentosListener: Observable<
    SubscriptionResponse<OnCreateAcabamentosSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAcabamentos {
        onCreateAcabamentos {
          __typename
          id
          descricao
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateAcabamentosSubscription>>;

  OnUpdateAcabamentosListener: Observable<
    SubscriptionResponse<OnUpdateAcabamentosSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAcabamentos {
        onUpdateAcabamentos {
          __typename
          id
          descricao
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateAcabamentosSubscription>>;

  OnDeleteAcabamentosListener: Observable<
    SubscriptionResponse<OnDeleteAcabamentosSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAcabamentos {
        onDeleteAcabamentos {
          __typename
          id
          descricao
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteAcabamentosSubscription>>;

  OnCreateMateriaisListener: Observable<
    SubscriptionResponse<OnCreateMateriaisSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateMateriais {
        onCreateMateriais {
          __typename
          id
          descricao
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateMateriaisSubscription>>;

  OnUpdateMateriaisListener: Observable<
    SubscriptionResponse<OnUpdateMateriaisSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateMateriais {
        onUpdateMateriais {
          __typename
          id
          descricao
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateMateriaisSubscription>>;

  OnDeleteMateriaisListener: Observable<
    SubscriptionResponse<OnDeleteMateriaisSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteMateriais {
        onDeleteMateriais {
          __typename
          id
          descricao
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteMateriaisSubscription>>;

  OnCreateTecnologiasListener: Observable<
    SubscriptionResponse<OnCreateTecnologiasSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTecnologias {
        onCreateTecnologias {
          __typename
          id
          descricao
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateTecnologiasSubscription>>;

  OnUpdateTecnologiasListener: Observable<
    SubscriptionResponse<OnUpdateTecnologiasSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTecnologias {
        onUpdateTecnologias {
          __typename
          id
          descricao
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateTecnologiasSubscription>>;

  OnDeleteTecnologiasListener: Observable<
    SubscriptionResponse<OnDeleteTecnologiasSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTecnologias {
        onDeleteTecnologias {
          __typename
          id
          descricao
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteTecnologiasSubscription>>;
}
