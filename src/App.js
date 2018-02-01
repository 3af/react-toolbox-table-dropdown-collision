import React, {Component} from 'react';
import {Dropdown} from "react-toolbox/lib/dropdown";
import {Table} from "react-toolbox/lib/table";
import {TableCell} from "react-toolbox/lib/table";
import {TableHead} from "react-toolbox/lib/table";
import ThemeProvider from "react-toolbox/lib/ThemeProvider";

import './App.css';

import theme from "./toolbox/theme";
import "./toolbox/theme.css";

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <Table>
                        <TableHead>
                            <TableCell>
                                <Dropdown
                                    label={"dropdown in table header"}
                                    source={[
                                        { value: 'EN-gb', label: 'England' },
                                        { value: 'ES-es', label: 'Spain'},
                                        { value: 'TH-th', label: 'Thailand' },
                                        { value: 'EN-en', label: 'USA'}
                                    ]}
                                />
                            </TableCell>
                        </TableHead>
                    </Table>
                    <Dropdown
                        label={"dropdown outside the table"}
                        source={[
                            { value: 'EN-gb', label: 'England' },
                            { value: 'ES-es', label: 'Spain'},
                            { value: 'TH-th', label: 'Thailand' },
                            { value: 'EN-en', label: 'USA'}
                        ]}
                    />
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
