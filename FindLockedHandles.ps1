function Find-LockedHandles {
    param (
        [string]$FolderPath
    )
    handle | findstr $FolderPath
}

# Example of running the function
Find-LockedHandles -FolderPath "D:\Simple webpage"

# Identify the process locking a specific file or folder
handle.exe | findstr "D:\Simple webpage"

function Stop-LockingProcess {
    param (
        [int]$PID
    )
    Stop-Process -Id $PID -Force
}

# Example of stopping the process using its PID
# Replace `<PID>` with the appropriate process ID from the output
Stop-LockingProcess -PID <PID>
