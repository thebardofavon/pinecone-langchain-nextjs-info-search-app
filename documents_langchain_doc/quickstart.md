---
description: "In this quickstart we\\'ll show you how to:"
docsearch:docusaurus_tag: docs-default-current
docsearch:language: en
docsearch:version: current
docusaurus_locale: en
docusaurus_tag: docs-default-current
docusaurus_version: current
generator: Docusaurus v2.4.3
lang: en
title: Quickstart \| 🦜️🔗 Langchain
twitter:card: summary_large_image
twitter:image: "https://python.langchain.com/img/parrot-chainlink-icon.png"
viewport: width=device-width,initial-scale=1
---

::: {#__docusaurus}
::: {role="region" aria-label="Skip to main content"}
[Skip to main
content](quickstart.html#__docusaurus_skipToContent_fallback){.skipToContent_fXgn}
:::

::: navbar__inner
::: navbar__items
![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdib3g9IjAgMCAzMCAzMCIgYXJpYS1oaWRkZW49InRydWUiPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMiIgLz48L3N2Zz4=)

[**🦜️🔗
LangChain**](https://python.langchain.com/){.navbar__brand}[Docs](introduction.html){.navbar__item
.navbar__link}[Use
cases](https://python.langchain.com/docs/use_cases){.navbar__item
.navbar__link}[Integrations](https://python.langchain.com/docs/integrations/providers){.navbar__item
.navbar__link}[Guides](https://python.langchain.com/docs/guides/debugging){.navbar__item
.navbar__link}[API![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://api.python.langchain.com){.navbar__item
.navbar__link target="_blank" rel="noopener noreferrer"}

::: {.navbar__item .dropdown .dropdown--hoverable}
[More](quickstart.html#){.navbar__link aria-haspopup="true"
aria-expanded="false" role="button"}

-   [Versioning](https://python.langchain.com/docs/packages){.dropdown__link}
-   [Changelog](https://python.langchain.com/docs/changelog){.dropdown__link}
-   [Developer\'s
    guide](https://python.langchain.com/docs/contributing){.dropdown__link}
-   [Templates](https://python.langchain.com/docs/templates/){.dropdown__link}
-   [Cookbooks![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGFyaWEtaGlkZGVuPSJ0cnVlIiB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJpY29uRXh0ZXJuYWxMaW5rX25QSVUiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIxIDEzdjEwaC0yMXYtMTloMTJ2MmgtMTB2MTVoMTd2LThoMnptMy0xMmgtMTAuOTg4bDQuMDM1IDQtNi45NzcgNy4wNyAyLjgyOCAyLjgyOCA2Ljk3Ny03LjA3IDQuMTI1IDQuMTcydi0xMXoiIC8+PC9zdmc+){.iconExternalLink_nPIU}](https://github.com/langchain-ai/langchain/blob/master/cookbook/README.md){.dropdown__link
    target="_blank" rel="noopener noreferrer"}
-   [Tutorials](https://python.langchain.com/docs/additional_resources/tutorials){.dropdown__link}
-   [YouTube
    videos](https://python.langchain.com/docs/additional_resources/youtube){.dropdown__link}
:::
:::

::: {.navbar__items .navbar__items--right}
::: {.navbar__item .dropdown .dropdown--hoverable .dropdown--right}
[🦜️🔗](quickstart.html#){.navbar__link aria-haspopup="true"
aria-expanded="false" role="button"}

-   [LangSmith![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGFyaWEtaGlkZGVuPSJ0cnVlIiB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJpY29uRXh0ZXJuYWxMaW5rX25QSVUiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIxIDEzdjEwaC0yMXYtMTloMTJ2MmgtMTB2MTVoMTd2LThoMnptMy0xMmgtMTAuOTg4bDQuMDM1IDQtNi45NzcgNy4wNyAyLjgyOCAyLjgyOCA2Ljk3Ny03LjA3IDQuMTI1IDQuMTcydi0xMXoiIC8+PC9zdmc+){.iconExternalLink_nPIU}](https://smith.langchain.com){.dropdown__link
    target="_blank" rel="noopener noreferrer"}
-   [LangSmith
    Docs![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGFyaWEtaGlkZGVuPSJ0cnVlIiB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJpY29uRXh0ZXJuYWxMaW5rX25QSVUiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIxIDEzdjEwaC0yMXYtMTloMTJ2MmgtMTB2MTVoMTd2LThoMnptMy0xMmgtMTAuOTg4bDQuMDM1IDQtNi45NzcgNy4wNyAyLjgyOCAyLjgyOCA2Ljk3Ny03LjA3IDQuMTI1IDQuMTcydi0xMXoiIC8+PC9zdmc+){.iconExternalLink_nPIU}](https://docs.smith.langchain.com/){.dropdown__link
    target="_blank" rel="noopener noreferrer"}
-   [LangServe
    GitHub![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGFyaWEtaGlkZGVuPSJ0cnVlIiB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJpY29uRXh0ZXJuYWxMaW5rX25QSVUiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIxIDEzdjEwaC0yMXYtMTloMTJ2MmgtMTB2MTVoMTd2LThoMnptMy0xMmgtMTAuOTg4bDQuMDM1IDQtNi45NzcgNy4wNyAyLjgyOCAyLjgyOCA2Ljk3Ny03LjA3IDQuMTI1IDQuMTcydi0xMXoiIC8+PC9zdmc+){.iconExternalLink_nPIU}](https://github.com/langchain-ai/langserve){.dropdown__link
    target="_blank" rel="noopener noreferrer"}
-   [Templates
    GitHub![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGFyaWEtaGlkZGVuPSJ0cnVlIiB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJpY29uRXh0ZXJuYWxMaW5rX25QSVUiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIxIDEzdjEwaC0yMXYtMTloMTJ2MmgtMTB2MTVoMTd2LThoMnptMy0xMmgtMTAuOTg4bDQuMDM1IDQtNi45NzcgNy4wNyAyLjgyOCAyLjgyOCA2Ljk3Ny03LjA3IDQuMTI1IDQuMTcydi0xMXoiIC8+PC9zdmc+){.iconExternalLink_nPIU}](https://github.com/langchain-ai/langchain/tree/master/templates){.dropdown__link
    target="_blank" rel="noopener noreferrer"}
-   [Templates
    Hub![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGFyaWEtaGlkZGVuPSJ0cnVlIiB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJpY29uRXh0ZXJuYWxMaW5rX25QSVUiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIxIDEzdjEwaC0yMXYtMTloMTJ2MmgtMTB2MTVoMTd2LThoMnptMy0xMmgtMTAuOTg4bDQuMDM1IDQtNi45NzcgNy4wNyAyLjgyOCAyLjgyOCA2Ljk3Ny03LjA3IDQuMTI1IDQuMTcydi0xMXoiIC8+PC9zdmc+){.iconExternalLink_nPIU}](https://templates.langchain.com){.dropdown__link
    target="_blank" rel="noopener noreferrer"}
-   [LangChain
    Hub![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGFyaWEtaGlkZGVuPSJ0cnVlIiB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJpY29uRXh0ZXJuYWxMaW5rX25QSVUiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIxIDEzdjEwaC0yMXYtMTloMTJ2MmgtMTB2MTVoMTd2LThoMnptMy0xMmgtMTAuOTg4bDQuMDM1IDQtNi45NzcgNy4wNyAyLjgyOCAyLjgyOCA2Ljk3Ny03LjA3IDQuMTI1IDQuMTcydi0xMXoiIC8+PC9zdmc+){.iconExternalLink_nPIU}](https://smith.langchain.com/hub){.dropdown__link
    target="_blank" rel="noopener noreferrer"}
-   [JS/TS
    Docs![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGFyaWEtaGlkZGVuPSJ0cnVlIiB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJpY29uRXh0ZXJuYWxMaW5rX25QSVUiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIxIDEzdjEwaC0yMXYtMTloMTJ2MmgtMTB2MTVoMTd2LThoMnptMy0xMmgtMTAuOTg4bDQuMDM1IDQtNi45NzcgNy4wNyAyLjgyOCAyLjgyOCA2Ljk3Ny03LjA3IDQuMTI1IDQuMTcydi0xMXoiIC8+PC9zdmc+){.iconExternalLink_nPIU}](https://js.langchain.com){.dropdown__link
    target="_blank" rel="noopener noreferrer"}
:::

[Chat![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://chat.langchain.com){.navbar__item
.navbar__link target="_blank"
rel="noopener noreferrer"}[](https://github.com/langchain-ai/langchain){.navbar__item
.navbar__link .header-github-link target="_blank"
rel="noopener noreferrer" aria-label="GitHub repository"}

::: {.toggle_vylO .colorModeToggle_DEke}
![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgY2xhc3M9ImxpZ2h0VG9nZ2xlSWNvbl9weWhSIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMiw5YzEuNjUsMCwzLDEuMzUsMywzcy0xLjM1LDMtMywzcy0zLTEuMzUtMy0zUzEwLjM1LDksMTIsOSBNMTIsN2MtMi43NiwwLTUsMi4yNC01LDVzMi4yNCw1LDUsNXM1LTIuMjQsNS01IFMxNC43Niw3LDEyLDdMMTIsN3ogTTIsMTNsMiwwYzAuNTUsMCwxLTAuNDUsMS0xcy0wLjQ1LTEtMS0xbC0yLDBjLTAuNTUsMC0xLDAuNDUtMSwxUzEuNDUsMTMsMiwxM3ogTTIwLDEzbDIsMGMwLjU1LDAsMS0wLjQ1LDEtMSBzLTAuNDUtMS0xLTFsLTIsMGMtMC41NSwwLTEsMC40NS0xLDFTMTkuNDUsMTMsMjAsMTN6IE0xMSwydjJjMCwwLjU1LDAuNDUsMSwxLDFzMS0wLjQ1LDEtMVYyYzAtMC41NS0wLjQ1LTEtMS0xUzExLDEuNDUsMTEsMnogTTExLDIwdjJjMCwwLjU1LDAuNDUsMSwxLDFzMS0wLjQ1LDEtMXYtMmMwLTAuNTUtMC40NS0xLTEtMUMxMS40NSwxOSwxMSwxOS40NSwxMSwyMHogTTUuOTksNC41OGMtMC4zOS0wLjM5LTEuMDMtMC4zOS0xLjQxLDAgYy0wLjM5LDAuMzktMC4zOSwxLjAzLDAsMS40MWwxLjA2LDEuMDZjMC4zOSwwLjM5LDEuMDMsMC4zOSwxLjQxLDBzMC4zOS0xLjAzLDAtMS40MUw1Ljk5LDQuNTh6IE0xOC4zNiwxNi45NSBjLTAuMzktMC4zOS0xLjAzLTAuMzktMS40MSwwYy0wLjM5LDAuMzktMC4zOSwxLjAzLDAsMS40MWwxLjA2LDEuMDZjMC4zOSwwLjM5LDEuMDMsMC4zOSwxLjQxLDBjMC4zOS0wLjM5LDAuMzktMS4wMywwLTEuNDEgTDE4LjM2LDE2Ljk1eiBNMTkuNDIsNS45OWMwLjM5LTAuMzksMC4zOS0xLjAzLDAtMS40MWMtMC4zOS0wLjM5LTEuMDMtMC4zOS0xLjQxLDBsLTEuMDYsMS4wNmMtMC4zOSwwLjM5LTAuMzksMS4wMywwLDEuNDEgczEuMDMsMC4zOSwxLjQxLDBMMTkuNDIsNS45OXogTTcuMDUsMTguMzZjMC4zOS0wLjM5LDAuMzktMS4wMywwLTEuNDFjLTAuMzktMC4zOS0xLjAzLTAuMzktMS40MSwwbC0xLjA2LDEuMDYgYy0wLjM5LDAuMzktMC4zOSwxLjAzLDAsMS40MXMxLjAzLDAuMzksMS40MSwwTDcuMDUsMTguMzZ6IiAvPjwvc3ZnPg==){.lightToggleIcon_pyhR}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgY2xhc3M9ImRhcmtUb2dnbGVJY29uX3dmZ1IiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTkuMzcsNS41MUM5LjE5LDYuMTUsOS4xLDYuODIsOS4xLDcuNWMwLDQuMDgsMy4zMiw3LjQsNy40LDcuNGMwLjY4LDAsMS4zNS0wLjA5LDEuOTktMC4yN0MxNy40NSwxNy4xOSwxNC45MywxOSwxMiwxOSBjLTMuODYsMC03LTMuMTQtNy03QzUsOS4wNyw2LjgxLDYuNTUsOS4zNyw1LjUxeiBNMTIsM2MtNC45NywwLTksNC4wMy05LDlzNC4wMyw5LDksOXM5LTQuMDMsOS05YzAtMC40Ni0wLjA0LTAuOTItMC4xLTEuMzYgYy0wLjk4LDEuMzctMi41OCwyLjI2LTQuNCwyLjI2Yy0yLjk4LDAtNS40LTIuNDItNS40LTUuNGMwLTEuODEsMC44OS0zLjQyLDIuMjYtNC40QzEyLjkyLDMuMDQsMTIuNDYsMywxMiwzTDEyLDN6IiAvPjwvc3ZnPg==){.darkToggleIcon_wfgR}
:::

::: searchBox_ZlJk
[![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGNsYXNzPSJEb2NTZWFyY2gtU2VhcmNoLUljb24iIHZpZXdib3g9IjAgMCAyMCAyMCI+PHBhdGggZD0iTTE0LjM4NiAxNC4zODZsNC4wODc3IDQuMDg3Ny00LjA4NzctNC4wODc3Yy0yLjk0MTggMi45NDE5LTcuNzExNSAyLjk0MTktMTAuNjUzMyAwLTIuOTQxOS0yLjk0MTgtMi45NDE5LTcuNzExNSAwLTEwLjY1MzMgMi45NDE4LTIuOTQxOSA3LjcxMTUtMi45NDE5IDEwLjY1MzMgMCAyLjk0MTkgMi45NDE4IDIuOTQxOSA3LjcxMTUgMCAxMC42NTMzeiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPjwvc3ZnPg==){.DocSearch-Search-Icon}[Search]{.DocSearch-Button-Placeholder}]{.DocSearch-Button-Container}[]{.DocSearch-Button-Keys}
:::
:::
:::

::: {.navbar-sidebar__backdrop role="presentation"}
:::

::: {#__docusaurus_skipToContent_fallback .main-wrapper .mainWrapper_z2l0 .docsWrapper_BCFX}
::: docPage__5DB
::: sidebarViewport_Xe31
::: sidebar_njMd
-   ::: menu__list-item-collapsible
    [Get
    started](https://python.langchain.com/docs/get_started){.menu__link
    .menu__link--active}
    :::

    -   [Introduction](introduction.html){.menu__link tabindex="0"}
    -   [Installation](installation.html){.menu__link tabindex="0"}
    -   [Quickstart](quickstart.html){.menu__link .menu__link--active
        aria-current="page" tabindex="0"}
    -   [Security](https://python.langchain.com/docs/security){.menu__link
        tabindex="0"}

-   ::: menu__list-item-collapsible
    [LangChain Expression
    Language](https://python.langchain.com/docs/expression_language/){.menu__link
    .menu__link--sublist aria-expanded="true"}
    :::

    -   [Get
        started](https://python.langchain.com/docs/expression_language/get_started){.menu__link
        tabindex="0"}

    -   [Why use
        LCEL](https://python.langchain.com/docs/expression_language/why){.menu__link
        tabindex="0"}

    -   [Interface](https://python.langchain.com/docs/expression_language/interface){.menu__link
        tabindex="0"}

    -   ::: menu__list-item-collapsible
        [How
        to](https://python.langchain.com/docs/expression_language/how_to/){.menu__link
        .menu__link--sublist aria-expanded="false" tabindex="0"}
        :::

    -   ::: menu__list-item-collapsible
        [Cookbook](https://python.langchain.com/docs/expression_language/cookbook/){.menu__link
        .menu__link--sublist aria-expanded="false" tabindex="0"}
        :::

    -   [LangChain Expression Language
        (LCEL)](https://python.langchain.com/docs/expression_language/){.menu__link
        tabindex="0"}

-   ::: menu__list-item-collapsible
    [Modules](https://python.langchain.com/docs/modules/){.menu__link
    .menu__link--sublist aria-expanded="true"}
    :::

    -   ::: menu__list-item-collapsible
        [Model
        I/O](https://python.langchain.com/docs/modules/model_io/){.menu__link
        .menu__link--sublist aria-expanded="false" tabindex="0"}
        :::

    -   ::: menu__list-item-collapsible
        [Retrieval](https://python.langchain.com/docs/modules/data_connection/){.menu__link
        .menu__link--sublist aria-expanded="false" tabindex="0"}
        :::

    -   ::: menu__list-item-collapsible
        [Agents](https://python.langchain.com/docs/modules/agents/){.menu__link
        .menu__link--sublist aria-expanded="false" tabindex="0"}
        :::

    -   [Chains](https://python.langchain.com/docs/modules/chains){.menu__link
        tabindex="0"}

    -   ::: menu__list-item-collapsible
        [More](https://python.langchain.com/docs/modules/memory/){.menu__link
        .menu__link--sublist .menu__link--sublist-caret
        aria-expanded="false" tabindex="0"}
        :::

-   [LangServe](https://python.langchain.com/docs/langserve){.menu__link}

-   ::: menu__list-item-collapsible
    [LangSmith](https://python.langchain.com/docs/langsmith/){.menu__link
    .menu__link--sublist aria-expanded="false"}
    :::

-   [LangGraph](https://python.langchain.com/docs/langgraph){.menu__link}

![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0iY29sbGFwc2VTaWRlYmFyQnV0dG9uSWNvbl9rdjBfIj48ZyBmaWxsPSIjN2E3YTdhIj48cGF0aCBkPSJNOS45OTIgMTAuMDIzYzAgLjItLjA2Mi4zOTktLjE3Mi41NDdsLTQuOTk2IDcuNDkyYS45ODIuOTgyIDAgMDEtLjgyOC40NTRIMWMtLjU1IDAtMS0uNDUzLTEtMSAwLS4yLjA1OS0uNDAzLjE2OC0uNTUxbDQuNjI5LTYuOTQyTC4xNjggMy4wNzhBLjkzOS45MzkgMCAwMTAgMi41MjhjMC0uNTQ4LjQ1LS45OTcgMS0uOTk3aDIuOTk2Yy4zNTIgMCAuNjQ5LjE4LjgyOC40NUw5LjgyIDkuNDcyYy4xMS4xNDguMTcyLjM0Ny4xNzIuNTV6bTAgMCIgLz48cGF0aCBkPSJNMTkuOTggMTAuMDIzYzAgLjItLjA1OC4zOTktLjE2OC41NDdsLTQuOTk2IDcuNDkyYS45ODcuOTg3IDAgMDEtLjgyOC40NTRoLTNjLS41NDcgMC0uOTk2LS40NTMtLjk5Ni0xIDAtLjIuMDU5LS40MDMuMTY4LS41NTFsNC42MjUtNi45NDItNC42MjUtNi45NDVhLjkzOS45MzkgMCAwMS0uMTY4LS41NSAxIDEgMCAwMS45OTYtLjk5N2gzYy4zNDggMCAuNjQ5LjE4LjgyOC40NWw0Ljk5NiA3LjQ5MmMuMTEuMTQ4LjE2OC4zNDcuMTY4LjU1em0wIDAiIC8+PC9nPjwvc3ZnPg==){.collapseSidebarButtonIcon_kv0_}
:::
:::

::: {.docMainContainer_gTbr role="main"}
::: {.container .padding-top--md .padding-bottom--lg}
::: row
::: {.col .docItemCol_VOVn}
::: docItemContainer_Djhp
-   [![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJicmVhZGNydW1iSG9tZUljb25fWU5GVCI+PHBhdGggZD0iTTEwIDE5di01aDR2NWMwIC41NS40NSAxIDEgMWgzYy41NSAwIDEtLjQ1IDEtMXYtN2gxLjdjLjQ2IDAgLjY4LS41Ny4zMy0uODdMMTIuNjcgMy42Yy0uMzgtLjM0LS45Ni0uMzQtMS4zNCAwbC04LjM2IDcuNTNjLS4zNC4zLS4xMy44Ny4zMy44N0g1djdjMCAuNTUuNDUgMSAxIDFoM2MuNTUgMCAxLS40NSAxLTF6IiBmaWxsPSJjdXJyZW50Q29sb3IiIC8+PC9zdmc+){.breadcrumbHomeIcon_YNFT}](https://python.langchain.com/){.breadcrumbs__link
    aria-label="Home page"}
-   [[Get
    started]{itemprop="name"}](https://python.langchain.com/docs/get_started){.breadcrumbs__link
    itemprop="item"}
-   [Quickstart]{.breadcrumbs__link itemprop="name"}

::: {.tocCollapsible_ETCw .theme-doc-toc-mobile .tocMobile_ITEo}
On this page
:::

::: {.theme-doc-markdown .markdown}
# Quickstart

In this quickstart we\'ll show you how to:

-   Get setup with LangChain, LangSmith and LangServe
-   Use the most basic and common components of LangChain: prompt
    templates, models, and output parsers
-   Use LangChain Expression Language, the protocol that LangChain is
    built on and which facilitates component chaining
-   Build a simple application with LangChain
-   Trace your application with LangSmith
-   Serve your application with LangServe

That\'s a fair amount to cover! Let\'s dive in.

## Setup[​](quickstart.html#setup "Direct link to Setup"){.hash-link aria-label="Direct link to Setup"} {#setup .anchor .anchorWithStickyNavbar_LWe7}

### Jupyter Notebook[​](quickstart.html#jupyter-notebook "Direct link to Jupyter Notebook"){.hash-link aria-label="Direct link to Jupyter Notebook"} {#jupyter-notebook .anchor .anchorWithStickyNavbar_LWe7}

This guide (and most of the other guides in the documentation) use
[Jupyter notebooks](https://jupyter.org/){target="_blank"
rel="noopener noreferrer"} and assume the reader is as well. Jupyter
notebooks are perfect for learning how to work with LLM systems because
often times things can go wrong (unexpected output, API down, etc) and
going through guides in an interactive environment is a great way to
better understand them.

You do not NEED to go through the guide in a Jupyter Notebook, but it is
recommended. See [here](https://jupyter.org/install){target="_blank"
rel="noopener noreferrer"} for instructions on how to install.

### Installation[​](quickstart.html#installation "Direct link to Installation"){.hash-link aria-label="Direct link to Installation"} {#installation .anchor .anchorWithStickyNavbar_LWe7}

To install LangChain run:

::: {.tabs-container .tabList__CuJ}
-   Pip
-   Conda

::: margin-top--md
::: {.tabItem_Ymn6 role="tabpanel"}
::: {.language-bash .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-bash .codeBlock_bY9V .thin-scrollbar tabindex="0"}
pip install langchain
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::
:::

::: {.tabItem_Ymn6 role="tabpanel" hidden=""}
::: {.language-bash .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-bash .codeBlock_bY9V .thin-scrollbar tabindex="0"}
conda install langchain -c conda-forge
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::
:::
:::
:::

For more details, see our [Installation guide](installation.html).

### LangSmith[​](quickstart.html#langsmith "Direct link to LangSmith"){.hash-link aria-label="Direct link to LangSmith"} {#langsmith .anchor .anchorWithStickyNavbar_LWe7}

Many of the applications you build with LangChain will contain multiple
steps with multiple invocations of LLM calls. As these applications get
more and more complex, it becomes crucial to be able to inspect what
exactly is going on inside your chain or agent. The best way to do this
is with [LangSmith](https://smith.langchain.com){target="_blank"
rel="noopener noreferrer"}.

Note that LangSmith is not needed, but it is helpful. If you do want to
use LangSmith, after you sign up at the link above, make sure to set
your environment variables to start logging traces:

::: {.language-shell .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-shell .codeBlock_bY9V .thin-scrollbar tabindex="0"}
export LANGCHAIN_TRACING_V2="true"
export LANGCHAIN_API_KEY="..."
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

## Building with LangChain[​](quickstart.html#building-with-langchain "Direct link to Building with LangChain"){.hash-link aria-label="Direct link to Building with LangChain"} {#building-with-langchain .anchor .anchorWithStickyNavbar_LWe7}

LangChain enables building application that connect external sources of
data and computation to LLMs. In this quickstart, we will walk through a
few different ways of doing that. We will start with a simple LLM chain,
which just relies on information in the prompt template to respond.
Next, we will build a retrieval chain, which fetches data from a
separate database and passes that into the prompt template. We will then
add in chat history, to create a conversation retrieval chain. This
allows you interact in a chat manner with this LLM, so it remembers
previous questions. Finally, we will build an agent - which utilizes and
LLM to determine whether or not it needs to fetch data to answer
questions. We will cover these at a high level, but there are lot of
details to all of these! We will link to relevant docs.

## LLM Chain[​](quickstart.html#llm-chain "Direct link to LLM Chain"){.hash-link aria-label="Direct link to LLM Chain"} {#llm-chain .anchor .anchorWithStickyNavbar_LWe7}

For this getting started guide, we will provide two options: using
OpenAI (a popular model available via API) or using a local open source
model.

::: {.tabs-container .tabList__CuJ}
-   OpenAI
-   Local

::: margin-top--md
::: {.tabItem_Ymn6 role="tabpanel"}
First we\'ll need to import the LangChain x OpenAI integration package.

::: {.language-shell .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-shell .codeBlock_bY9V .thin-scrollbar tabindex="0"}
pip install langchain-openai
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

Accessing the API requires an API key, which you can get by creating an
account and heading
[here](https://platform.openai.com/account/api-keys){target="_blank"
rel="noopener noreferrer"}. Once we have a key we\'ll want to set it as
an environment variable by running:

::: {.language-shell .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-shell .codeBlock_bY9V .thin-scrollbar tabindex="0"}
export OPENAI_API_KEY="..."
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

We can then initialize the model:

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
from langchain_openai import ChatOpenAI

llm = ChatOpenAI()
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

If you\'d prefer not to set an environment variable you can pass the key
in directly via the `openai_api_key` named parameter when initiating the
OpenAI LLM class:

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(openai_api_key="...")
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::
:::

::: {.tabItem_Ymn6 role="tabpanel" hidden=""}
[Ollama](https://ollama.ai/){target="_blank" rel="noopener noreferrer"}
allows you to run open-source large language models, such as Llama 2,
locally.

First, follow [these
instructions](https://github.com/jmorganca/ollama){target="_blank"
rel="noopener noreferrer"} to set up and run a local Ollama instance:

-   [Download](https://ollama.ai/download){target="_blank"
    rel="noopener noreferrer"}
-   Fetch a model via `ollama pull llama2`

Then, make sure the Ollama server is running. After that, you can do:

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
from langchain_community.llms import Ollama
llm = Ollama(model="llama2")
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::
:::
:::
:::

Once you\'ve installed and initialized the LLM of your choice, we can
try using it! Let\'s ask it what LangSmith is - this is something that
wasn\'t present in the training data so it shouldn\'t have a very good
response.

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
llm.invoke("how can langsmith help with testing?")
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

We can also guide it\'s response with a prompt template. Prompt
templates are used to convert raw user input to a better input to the
LLM.

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
from langchain_core.prompts import ChatPromptTemplate
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are world class technical documentation writer."),
    ("user", "{input}")
])
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

We can now combine these into a simple LLM chain:

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
chain = prompt | llm 
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

We can now invoke it and ask the same question. It still won\'t know the
answer, but it should respond in a more proper tone for a technical
writer!

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
chain.invoke({"input": "how can langsmith help with testing?"})
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

The output of a ChatModel (and therefore, of this chain) is a message.
However, it\'s often much more convenient to work with strings. Let\'s
add a simple output parser to convert the chat message to a string.

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
from langchain_core.output_parsers import StrOutputParser

output_parser = StrOutputParser()
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

We can now add this to the previous chain:

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
chain = prompt | llm | output_parser
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

We can now invoke it and ask the same question. The answer will now be a
string (rather than a ChatMessage).

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
chain.invoke({"input": "how can langsmith help with testing?"})
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

### Diving Deeper[​](quickstart.html#diving-deeper "Direct link to Diving Deeper"){.hash-link aria-label="Direct link to Diving Deeper"} {#diving-deeper .anchor .anchorWithStickyNavbar_LWe7}

We\'ve now successfully set up a basic LLM chain. We only touched on the
basics of prompts, models, and output parsers - for a deeper dive into
everything mentioned here, see [this section of
documentation](https://python.langchain.com/docs/modules/model_io).

## Retrieval Chain[​](quickstart.html#retrieval-chain "Direct link to Retrieval Chain"){.hash-link aria-label="Direct link to Retrieval Chain"} {#retrieval-chain .anchor .anchorWithStickyNavbar_LWe7}

In order to properly answer the original question (\"how can langsmith
help with testing?\"), we need to provide additional context to the LLM.
We can do this via *retrieval*. Retrieval is useful when you have **too
much data** to pass to the LLM directly. You can then use a retriever to
fetch only the most relevant pieces and pass those in.

In this process, we will look up relevant documents from a *Retriever*
and then pass them into the prompt. A Retriever can be backed by
anything - a SQL table, the internet, etc - but in this instance we will
populate a vector store and use that as a retriever. For more
information on vectorstores, see [this
documentation](https://python.langchain.com/docs/modules/data_connection/vectorstores).

First, we need to load the data that we want to index. In order to do
this, we will use the WebBaseLoader. This requires installing
[BeautifulSoup](https://beautiful-soup-4.readthedocs.io/en/latest/){target="_blank"
rel="noopener noreferrer"}:

::: {.codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-text .codeBlock_bY9V .thin-scrollbar tabindex="0"}
```shell
pip install beautifulsoup4
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

After that, we can import and use WebBaseLoader.

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
from langchain_community.document_loaders import WebBaseLoader
loader = WebBaseLoader("https://docs.smith.langchain.com/overview")

docs = loader.load()
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

Next, we need to index it into a vectorstore. This requires a few
components, namely an [embedding
model](https://python.langchain.com/docs/modules/data_connection/text_embedding)
and a
[vectorstore](https://python.langchain.com/docs/modules/data_connection/vectorstores).

For embedding models, we once again provide examples for accessing via
OpenAI or via local models.

::: {.tabs-container .tabList__CuJ}
-   OpenAI
-   Local

::: margin-top--md
::: {.tabItem_Ymn6 role="tabpanel"}
Make sure you have the \`langchain_openai\` package installed an the
appropriate environment variables set (these are the same as needed for
the LLM).

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
from langchain_openai import OpenAIEmbeddings

embeddings = OpenAIEmbeddings()
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::
:::

::: {.tabItem_Ymn6 role="tabpanel" hidden=""}
Make sure you have Ollama running (same set up as with the LLM).

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
from langchain_community.embeddings import OllamaEmbeddings

embeddings = OllamaEmbeddings()
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::
:::
:::
:::

Now, we can use this embedding model to ingest documents into a
vectorstore. We will use a simple local vectorstore,
[FAISS](https://python.langchain.com/docs/integrations/vectorstores/faiss),
for simplicity\'s sake.

First we need to install the required packages for that:

::: {.language-shell .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-shell .codeBlock_bY9V .thin-scrollbar tabindex="0"}
pip install faiss-cpu
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

Then we can build our index:

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
from langchain_community.vectorstores import FAISS
from langchain.text_splitter import RecursiveCharacterTextSplitter


text_splitter = RecursiveCharacterTextSplitter()
documents = text_splitter.split_documents(docs)
vector = FAISS.from_documents(documents, embeddings)
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

Now that we have this data indexed in a vectorstore, we will create a
retrieval chain. This chain will take an incoming question, look up
relevant documents, then pass those documents along with the original
question into an LLM and ask it to answer the original question.

First, let\'s set up the chain that takes a question and the retrieved
documents and generates an answer.

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
from langchain.chains.combine_documents import create_stuff_documents_chain

prompt = ChatPromptTemplate.from_template("""Answer the following question based only on the provided context:

<context>
{context}
</context>

Question: {input}""")

document_chain = create_stuff_documents_chain(llm, prompt)
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

If we wanted to, we could run this ourselves by passing in documents
directly:

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
from langchain_core.documents import Document

document_chain.invoke({
    "input": "how can langsmith help with testing?",
    "context": [Document(page_content="langsmith can let you visualize test results")]
})
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

However, we want the documents to first come from the retriever we just
set up. That way, for a given question we can use the retriever to
dynamically select the most relevant documents and pass those in.

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
from langchain.chains import create_retrieval_chain

retriever = vector.as_retriever()
retrieval_chain = create_retrieval_chain(retriever, document_chain)
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

We can now invoke this chain. This returns a dictionary - the response
from the LLM is in the `answer` key

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
response = retrieval_chain.invoke({"input": "how can langsmith help with testing?"})
print(response["answer"])

# LangSmith offers several features that can help with testing:...
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

This answer should be much more accurate!

### Diving Deeper[​](quickstart.html#diving-deeper-1 "Direct link to Diving Deeper"){.hash-link aria-label="Direct link to Diving Deeper"} {#diving-deeper-1 .anchor .anchorWithStickyNavbar_LWe7}

We\'ve now successfully set up a basic retrieval chain. We only touched
on the basics of retrieval - for a deeper dive into everything mentioned
here, see [this section of
documentation](https://python.langchain.com/docs/modules/data_connection).

## Conversation Retrieval Chain[​](quickstart.html#conversation-retrieval-chain "Direct link to Conversation Retrieval Chain"){.hash-link aria-label="Direct link to Conversation Retrieval Chain"} {#conversation-retrieval-chain .anchor .anchorWithStickyNavbar_LWe7}

The chain we\'ve created so far can only answer single questions. One of
the main types of LLM applications that people are building are chat
bots. So how do we turn this chain into one that can answer follow up
questions?

We can still use the `create_retrieval_chain` function, but we need to
change two things:

1.  The retrieval method should now not just work on the most recent
    input, but rather should take the whole history into account.
2.  The final LLM chain should likewise take the whole history into
    account

**Updating Retrieval**

In order to update retrieval, we will create a new chain. This chain
will take in the most recent input (`input`) and the conversation
history (`chat_history`) and use an LLM to generate a search query.

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
from langchain.chains import create_history_aware_retriever
from langchain_core.prompts import MessagesPlaceholder

# First we need a prompt that we can pass into an LLM to generate this search query

prompt = ChatPromptTemplate.from_messages([
    MessagesPlaceholder(variable_name="chat_history"),
    ("user", "{input}"),
    ("user", "Given the above conversation, generate a search query to look up in order to get information relevant to the conversation")
])
retriever_chain = create_history_aware_retriever(llm, retriever, prompt)
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

We can test this out by passing in an instance where the user is asking
a follow up question.

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
from langchain_core.messages import HumanMessage, AIMessage

chat_history = [HumanMessage(content="Can LangSmith help test my LLM applications?"), AIMessage(content="Yes!")]
retriever_chain.invoke({
    "chat_history": chat_history,
    "input": "Tell me how"
})
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

You should see that this returns documents about testing in LangSmith.
This is because the LLM generated a new query, combining the chat
history with the follow up question.

Now that we have this new retriever, we can create a new chain to
continue the conversation with these retrieved documents in mind.

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
prompt = ChatPromptTemplate.from_messages([
    ("system", "Answer the user's questions based on the below context:\n\n{context}"),
    MessagesPlaceholder(variable_name="chat_history"),
    ("user", "{input}"),
])
document_chain = create_stuff_documents_chain(llm, prompt)

retrieval_chain = create_retrieval_chain(retriever_chain, document_chain)
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

We can now test this out end-to-end:

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
chat_history = [HumanMessage(content="Can LangSmith help test my LLM applications?"), AIMessage(content="Yes!")]
retrieval_chain.invoke({
    "chat_history": chat_history,
    "input": "Tell me how"
})
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

We can see that this gives a coherent answer - we\'ve successfully
turned our retrieval chain into a chatbot!

## Agent[​](quickstart.html#agent "Direct link to Agent"){.hash-link aria-label="Direct link to Agent"} {#agent .anchor .anchorWithStickyNavbar_LWe7}

We\'ve so far create examples of chains - where each step is known ahead
of time. The final thing we will create is an agent - where the LLM
decides what steps to take.

**NOTE: for this example we will only show how to create an agent using
OpenAI models, as local models are not reliable enough yet.**

One of the first things to do when building an agent is to decide what
tools it should have access to. For this example, we will give the agent
access two tools:

1.  The retriever we just created. This will let it easily answer
    questions about LangSmith
2.  A search tool. This will let it easily answer questions that require
    up to date information.

First, let\'s set up a tool for the retriever we just created:

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
from langchain.tools.retriever import create_retriever_tool

retriever_tool = create_retriever_tool(
    retriever,
    "langsmith_search",
    "Search for information about LangSmith. For any questions about LangSmith, you must use this tool!",
)
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

The search tool that we will use is
[Tavily](https://python.langchain.com/docs/integrations/retrievers/tavily).
This will require an API key (they have generous free tier). After
creating it on their platform, you need to set it as an environment
variable:

::: {.language-shell .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-shell .codeBlock_bY9V .thin-scrollbar tabindex="0"}
export TAVILY_API_KEY=...
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

If you do not want to set up an API key, you can skip creating this
tool.

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
from langchain_community.tools.tavily_search import TavilySearchResults

search = TavilySearchResults()
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

We can now create a list of the tools we want to work with:

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
tools = [retriever_tool, search]
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

Now that we have the tools, we can create an agent to use them. We will
go over this pretty quickly - for a deeper dive into what exactly is
going on, check out the [Agent\'s Getting Started
documentation](https://python.langchain.com/docs/modules/agents)

Install langchain hub first

::: {.language-bash .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-bash .codeBlock_bY9V .thin-scrollbar tabindex="0"}
pip install langchainhub
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

Now we can use it to get a predefined prompt

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
from langchain_openai import ChatOpenAI
from langchain import hub
from langchain.agents import create_openai_functions_agent
from langchain.agents import AgentExecutor

# Get the prompt to use - you can modify this!
prompt = hub.pull("hwchase17/openai-functions-agent")
llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)
agent = create_openai_functions_agent(llm, tools, prompt)
agent_executor = AgentExecutor(agent=agent, tools=tools, verbose=True)
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

We can now invoke the agent and see how it responds! We can ask it
questions about LangSmith:

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
agent_executor.invoke({"input": "how can langsmith help with testing?"})
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

We can ask it about the weather:

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
agent_executor.invoke({"input": "what is the weather in SF?"})
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

We can have conversations with it:

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
chat_history = [HumanMessage(content="Can LangSmith help test my LLM applications?"), AIMessage(content="Yes!")]
agent_executor.invoke({
    "chat_history": chat_history,
    "input": "Tell me how"
})
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

### Diving Deeper[​](quickstart.html#diving-deeper-2 "Direct link to Diving Deeper"){.hash-link aria-label="Direct link to Diving Deeper"} {#diving-deeper-2 .anchor .anchorWithStickyNavbar_LWe7}

We\'ve now successfully set up a basic agent. We only touched on the
basics of agents - for a deeper dive into everything mentioned here, see
[this section of
documentation](https://python.langchain.com/docs/modules/agents).

## Serving with LangServe[​](quickstart.html#serving-with-langserve "Direct link to Serving with LangServe"){.hash-link aria-label="Direct link to Serving with LangServe"} {#serving-with-langserve .anchor .anchorWithStickyNavbar_LWe7}

Now that we\'ve built an application, we need to serve it. That\'s where
LangServe comes in. LangServe helps developers deploy LangChain chains
as a REST API. You do not need to use LangServe to use LangChain, but in
this guide we\'ll show how you can deploy your app with LangServe.

While the first part of this guide was intended to be run in a Jupyter
Notebook, we will now move out of that. We will be creating a Python
file and then interacting with it from the command line.

Install with:

::: {.language-bash .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-bash .codeBlock_bY9V .thin-scrollbar tabindex="0"}
pip install "langserve[all]"
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

### Server[​](quickstart.html#server "Direct link to Server"){.hash-link aria-label="Direct link to Server"} {#server .anchor .anchorWithStickyNavbar_LWe7}

To create a server for our application we\'ll make a `serve.py` file.
This will contain our logic for serving our application. It consists of
three things:

1.  The definition of our chain that we just built above
2.  Our FastAPI app
3.  A definition of a route from which to serve the chain, which is done
    with `langserve.add_routes`

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
#!/usr/bin/env python
from typing import List

from fastapi import FastAPI
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
from langchain_community.document_loaders import WebBaseLoader
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.tools.retriever import create_retriever_tool
from langchain_community.tools.tavily_search import TavilySearchResults
from langchain_openai import ChatOpenAI
from langchain import hub
from langchain.agents import create_openai_functions_agent
from langchain.agents import AgentExecutor
from langchain.pydantic_v1 import BaseModel, Field
from langchain_core.messages import BaseMessage
from langserve import add_routes

# 1. Load Retriever
loader = WebBaseLoader("https://docs.smith.langchain.com/overview")
docs = loader.load()
text_splitter = RecursiveCharacterTextSplitter()
documents = text_splitter.split_documents(docs)
embeddings = OpenAIEmbeddings()
vector = FAISS.from_documents(documents, embeddings)
retriever = vector.as_retriever()

# 2. Create Tools
retriever_tool = create_retriever_tool(
    retriever,
    "langsmith_search",
    "Search for information about LangSmith. For any questions about LangSmith, you must use this tool!",
)
search = TavilySearchResults()
tools = [retriever_tool, search]


# 3. Create Agent
prompt = hub.pull("hwchase17/openai-functions-agent")
llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)
agent = create_openai_functions_agent(llm, tools, prompt)
agent_executor = AgentExecutor(agent=agent, tools=tools, verbose=True)


# 4. App definition
app = FastAPI(
  title="LangChain Server",
  version="1.0",
  description="A simple API server using LangChain's Runnable interfaces",
)

# 5. Adding chain route

# We need to add these input/output schemas because the current AgentExecutor
# is lacking in schemas.

class Input(BaseModel):
    input: str
    chat_history: List[BaseMessage] = Field(
        ...,
        extra={"widget": {"type": "chat", "input": "location"}},
    )


class Output(BaseModel):
    output: str

add_routes(
    app,
    agent_executor.with_types(input_type=Input, output_type=Output),
    path="/agent",
)

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="localhost", port=8000)
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

And that\'s it! If we execute this file:

::: {.language-bash .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-bash .codeBlock_bY9V .thin-scrollbar tabindex="0"}
python serve.py
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

we should see our chain being served at localhost:8000.

### Playground[​](quickstart.html#playground "Direct link to Playground"){.hash-link aria-label="Direct link to Playground"} {#playground .anchor .anchorWithStickyNavbar_LWe7}

Every LangServe service comes with a simple built-in UI for configuring
and invoking the application with streaming output and visibility into
intermediate steps. Head to http://localhost:8000/agent/playground/ to
try it out! Pass in the same question as before - \"how can langsmith
help with testing?\" - and it should respond same as before.

### Client[​](quickstart.html#client "Direct link to Client"){.hash-link aria-label="Direct link to Client"} {#client .anchor .anchorWithStickyNavbar_LWe7}

Now let\'s set up a client for programmatically interacting with our
service. We can easily do this with the
`[langserve.RemoteRunnable](/docs/langserve#client)`. Using this, we can
interact with the served chain as if it were running client-side.

::: {.language-python .codeBlockContainer_Ckt0 .theme-code-block style="--prism-color:#000000;--prism-background-color:#F5F5F5"}
::: codeBlockContent_biex
``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
from langserve import RemoteRunnable

remote_chain = RemoteRunnable("http://localhost:8000/agent/")
remote_chain.invoke({"input": "how can langsmith help with testing?"})
```

::: buttonGroup__atx
[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uSWNvbl95OTdOIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPjwvc3ZnPg==){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJjb3B5QnV0dG9uU3VjY2Vzc0ljb25fTGpkUyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA
aria-hidden="true"}
:::
:::
:::

To learn more about the many other features of LangServe [head
here](https://python.langchain.com/docs/langserve).

## Next steps[​](quickstart.html#next-steps "Direct link to Next steps"){.hash-link aria-label="Direct link to Next steps"} {#next-steps .anchor .anchorWithStickyNavbar_LWe7}

We\'ve touched on how to build an application with LangChain, how to
trace it with LangSmith, and how to serve it with LangServe. There are a
lot more features in all three of these than we can cover here. To
continue on your journey, we recommend you read the following (in
order):

-   All of these features are backed by [LangChain Expression Language
    (LCEL)](https://python.langchain.com/docs/expression_language) - a
    way to chain these components together. Check out that documentation
    to better understand how to create custom chains.
-   [Model IO](https://python.langchain.com/docs/modules/model_io)
    covers more details of prompts, LLMs, and output parsers.
-   [Retrieval](https://python.langchain.com/docs/modules/data_connection)
    covers more details of everything related to retrieval
-   [Agents](https://python.langchain.com/docs/modules/agents) covers
    details of everything related to agents
-   Explore common [end-to-end use
    cases](https://python.langchain.com/docs/use_cases/qa_structured/sql)
    and [template
    applications](https://python.langchain.com/docs/templates)
-   [Read up on
    LangSmith](https://python.langchain.com/docs/langsmith/), the
    platform for debugging, testing, monitoring and more
-   Learn more about serving your applications with
    [LangServe](https://python.langchain.com/docs/langserve)
:::

[](installation.html){.pagination-nav__link .pagination-nav__link--prev}

::: pagination-nav__sublabel
Previous
:::

::: pagination-nav__label
Installation
:::

[](https://python.langchain.com/docs/security){.pagination-nav__link
.pagination-nav__link--next}

::: pagination-nav__sublabel
Next
:::

::: pagination-nav__label
Security
:::
:::
:::

::: {.col .col--3}
::: {.tableOfContents_bqdL .thin-scrollbar .theme-doc-toc-desktop}
-   [Setup](quickstart.html#setup){.table-of-contents__link
    .toc-highlight}
    -   [Jupyter
        Notebook](quickstart.html#jupyter-notebook){.table-of-contents__link
        .toc-highlight}
    -   [Installation](quickstart.html#installation){.table-of-contents__link
        .toc-highlight}
    -   [LangSmith](quickstart.html#langsmith){.table-of-contents__link
        .toc-highlight}
-   [Building with
    LangChain](quickstart.html#building-with-langchain){.table-of-contents__link
    .toc-highlight}
-   [LLM Chain](quickstart.html#llm-chain){.table-of-contents__link
    .toc-highlight}
    -   [Diving
        Deeper](quickstart.html#diving-deeper){.table-of-contents__link
        .toc-highlight}
-   [Retrieval
    Chain](quickstart.html#retrieval-chain){.table-of-contents__link
    .toc-highlight}
    -   [Diving
        Deeper](quickstart.html#diving-deeper-1){.table-of-contents__link
        .toc-highlight}
-   [Conversation Retrieval
    Chain](quickstart.html#conversation-retrieval-chain){.table-of-contents__link
    .toc-highlight}
-   [Agent](quickstart.html#agent){.table-of-contents__link
    .toc-highlight}
    -   [Diving
        Deeper](quickstart.html#diving-deeper-2){.table-of-contents__link
        .toc-highlight}
-   [Serving with
    LangServe](quickstart.html#serving-with-langserve){.table-of-contents__link
    .toc-highlight}
    -   [Server](quickstart.html#server){.table-of-contents__link
        .toc-highlight}
    -   [Playground](quickstart.html#playground){.table-of-contents__link
        .toc-highlight}
    -   [Client](quickstart.html#client){.table-of-contents__link
        .toc-highlight}
-   [Next steps](quickstart.html#next-steps){.table-of-contents__link
    .toc-highlight}
:::
:::
:::
:::
:::
:::
:::

::: {.container .container-fluid}
::: {.row .footer__links}
::: {.col .footer__col}
::: footer__title
Community
:::

-   [Discord![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://discord.gg/cU2adEyC7w){.footer__link-item
    target="_blank" rel="noopener noreferrer"}
-   [Twitter![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://twitter.com/LangChainAI){.footer__link-item
    target="_blank" rel="noopener noreferrer"}
:::

::: {.col .footer__col}
::: footer__title
GitHub
:::

-   [Python![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://github.com/langchain-ai/langchain){.footer__link-item
    target="_blank" rel="noopener noreferrer"}
-   [JS/TS![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://github.com/langchain-ai/langchainjs){.footer__link-item
    target="_blank" rel="noopener noreferrer"}
:::

::: {.col .footer__col}
::: footer__title
More
:::

-   [Homepage![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://langchain.com){.footer__link-item
    target="_blank" rel="noopener noreferrer"}
-   [Blog![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://blog.langchain.dev){.footer__link-item
    target="_blank" rel="noopener noreferrer"}
:::
:::

::: {.footer__bottom .text--center}
::: footer__copyright
Copyright © 2024 LangChain, Inc.
:::
:::
:::
:::
