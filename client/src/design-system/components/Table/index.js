import React from 'react';
import {
    TdTable,
    Table,
    ThTable,
    TrTable,
    PreLoadContainer,
    LoadingIcon,
    NoDataIcon,
    NoDataText
} from './styles';

export default function TableDefault({ columns, data, dataKey, loading }) {
    
    if (loading) {
        return (
            <PreLoadContainer>
                <LoadingIcon />
            </PreLoadContainer>
        )
    }

    if (data.length === 0) {
        return (
            <PreLoadContainer>
                <NoDataIcon />
                <NoDataText>Nenhum registro encontrado</NoDataText>
            </PreLoadContainer>
        )
    }
    
    return (
        <Table>
            <thead>
                <tr>
                    {
                        columns.map((column, idx) => <ThTable key={`th-key-${idx}`}>{column.title}</ThTable>) 
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map(item => {

                        const itemKey = typeof item === 'object' ? item[dataKey] : item;

                        return (
                            <TrTable key={`tr-key-${itemKey}`}>
                                {
                                    columns.map((column, idx) => <TdTable key={`td-key-${idx}`}>{column.render(item)}</TdTable>)
                                }
                            </TrTable>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}