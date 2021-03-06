// ==LICENSE-BEGIN==
// Copyright 2017 European Digital Reading Lab. All rights reserved.
// Licensed to the Readium Foundation under one or more contributor license agreements.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file exposed on Github (readium) in the project repository.
// ==LICENSE-END==

import { TMethodApi } from "readium-desktop/common/api/methodApi.type";
import { TModuleApi } from "readium-desktop/common/api/moduleApi.type";

export interface MetaApi {
    requestId: string;
    moduleId: TModuleApi;
    methodId: TMethodApi;
}

export interface Meta {
    api: MetaApi;
}
