import React from 'react'
import { LogoPropsData } from 'types/api'
import * as S from './styles'

const Logo = ({data}: LogoPropsData) => <S.LogoWrapper src={`http://localhost:1337${data.attributes.url}`} alt={data.attributes.alternativeText} />

export default Logo
