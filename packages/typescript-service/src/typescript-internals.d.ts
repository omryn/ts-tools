import * as ts from 'typescript'

declare module 'typescript' {
    // needed for custom readDirectory
    export function matchFiles(
        path: string,
        extensions: ReadonlyArray<string> | undefined,
        excludes: ReadonlyArray<string> | undefined,
        includes: ReadonlyArray<string> | undefined,
        useCaseSensitiveFileNames: boolean,
        currentDirectory: string, depth: number | undefined,
        getFileSystemEntries: (path: string) => FileSystemEntries
    ): string[]

    // used by matchFiles above
    export interface FileSystemEntries {
        files: ReadonlyArray<string>
        directories: ReadonlyArray<string>
    }

    // needed to resolve newLine, while taking compilerOptions into consideration, for each `LanguageServiceHost`
    export function getNewLineCharacter(
        options: ts.CompilerOptions | ts.PrinterOptions,
        getNewLine?: () => string
    ): string

    // dirname, typescript version (slashes normalized to posix-style). needed for default baseHost.
    export function getDirectoryPath(path: string): string
}
